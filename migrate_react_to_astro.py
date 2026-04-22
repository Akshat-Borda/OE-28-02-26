import os
import re

mapping = {
    "Home.jsx": "index.astro",
    "Solar.jsx": "solar.astro",
    "Wind.jsx": "wind.astro",
    "Hybrid.jsx": "hybrid.astro",
    "About.jsx": "about.astro",
    "Consulting.jsx": "consulting.astro",
    "EpcServices.jsx": "epc-services.astro",
    "OmServices.jsx": "om-services.astro"
}

def jsx_to_html_style(match):
    # Convert React style={{marginTop: 'var(--space-12)'}} to inline HTML style="margin-top: var(--space-12);"
    content = match.group(1)
    
    # Very basic regex replacing camelCase with kebab-case simply by inserting dashes before capitals
    def camel_to_kebab(m):
        return "-" + m.group(1).lower()
    
    # We fix basics: marginTop -> margin-top
    props = content.split(',')
    html_styles = []
    for prop in props:
        if ':' not in prop: continue
        k, v = prop.split(':', 1)
        k = k.strip()
        v = v.strip().strip("'").strip('"')
        
        # camel to kebab
        k = re.sub(r'([A-Z])', camel_to_kebab, k)
        html_styles.append(f"{k}: {v};")
        
    return 'style="' + ' '.join(html_styles) + '"'

for jsx_file, astro_file in mapping.items():
    jsx_path = os.path.join("src/components/pages", jsx_file)
    astro_path = os.path.join("src/pages", astro_file)
    
    if not os.path.exists(jsx_path): continue
    
    with open(jsx_path, 'r') as f:
        content = f.read()
        
    # Extract return ( ... );
    # The return statement captures the core JSX tree
    match = re.search(r'return\s*\(\s*(<div>.*?)^\s*\);\s*};', content, re.DOTALL | re.MULTILINE)
    if not match:
        # Fallback if return is structured slightly differently
        match = re.search(r'return\s*\(\s*(.*?)^\s*\);\s*}', content, re.DOTALL | re.MULTILINE)
        
    if match:
        html = match.group(1)
        
        # Strip Header, Footer, Mobile Nav from HTML logic if present. They are handled by AppLayout now.
        html = re.sub(r'\{/\*\s*(Header|Mobile Navigation|Footer)\s*\*/\}', '', html)
        html = re.sub(r'<Header\s*/>', '', html)
        html = re.sub(r'<Footer\s*/>', '', html)
        
        # Fix className
        html = html.replace('className=', 'class=')
        
        # Fix inline styles
        html = re.sub(r'style=\{\{\s*(.*?)\s*\}\}', jsx_to_html_style, html)
        
        # Un-React self-closing image/video tags and attributes if needed
        html = html.replace('autoPlay', 'autoplay')
        html = html.replace('playsInline', 'playsinline')
        
        # Inject poster to video tags in Wind and Solar
        if jsx_file in ["Wind.jsx", "Solar.jsx"]:
            html = html.replace('preload="auto"', '')
            html = html.replace('<video ', '<video poster="/images/stock/poster-' + jsx_file.replace('.jsx', '').lower() + '.jpg" preload="none" ')
        
        # Build new astro root
        astro_template = f"""---
import AppLayout from '../layouts/AppLayout.astro';
---

<AppLayout title="{jsx_file.replace('.jsx', '')} | OnLoop Energy">
{html}
</AppLayout>
"""
        with open(astro_path, 'w') as f:
            f.write(astro_template)
        print(f"Migrated {jsx_file} to {astro_file}")
