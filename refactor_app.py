import os
import re

def update_index_html():
    path = 'o:/Onloop/React_Web/index.html'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('<title>temp-app</title>', '<title>OnLoop Energy</title>')
    content = content.replace('</head>', '    <script src="/js/main.js"></script>\n  </head>')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def extract_globals(home_content):
    header_match = re.search(r'(<header className="header">.*?</header>)', home_content, re.DOTALL)
    nav_match = re.search(r'(<nav className="nav--mobile">.*?</nav>)', home_content, re.DOTALL)
    footer_match = re.search(r'(<footer className="footer">.*?</footer>)', home_content, re.DOTALL)
    
    return header_match.group(1), nav_match.group(1), footer_match.group(1)

def fix_jsx_attrs(content):
    content = content.replace('stroke-width', 'strokeWidth')
    content = content.replace('stroke-linecap', 'strokeLinecap')
    content = content.replace('stroke-linejoin', 'strokeLinejoin')
    content = content.replace('autoplay ', 'autoPlay ')
    content = content.replace('playsinline ', 'playsInline ')
    content = content.replace('autocomplete=', 'autoComplete=')
    content = content.replace('for=', 'htmlFor=')
    content = re.sub(r'class="([^"]*)"', r'className="\1"', content)
    return content

def fix_links(content):
    # Mapping
    links = {
        'index.html': '/',
        'about.html': '/about',
        'solar.html': '/solar',
        'wind.html': '/wind',
        'hybrid.html': '/hybrid',
        'epc-services.html': '/epc-services',
        'om-services.html': '/om-services',
        'consulting.html': '/consulting',
        'contact.html': '/contact'
    }
    
    for old, new in links.items():
        content = re.sub(rf'href="{old}"', f'to="{new}"', content)
        
    return content

def refactor():
    pages_dir = 'o:/Onloop/React_Web/src/pages'
    components_dir = 'o:/Onloop/React_Web/src/components'
    os.makedirs(components_dir, exist_ok=True)
    
    home_path = os.path.join(pages_dir, 'Home.jsx')
    home_content = read_file(home_path)
    
    header, nav, footer = extract_globals(home_content)
    
    layout_content = f"""import React, {{ useEffect }} from 'react';
import {{ Outlet, Link, useLocation }} from 'react-router-dom';

const Layout = () => {{
  const location = useLocation();

  useEffect(() => {{
    window.scrollTo(0, 0);
    // Re-initialize scripts on route change
    if (window.initMobileNav) window.initMobileNav();
    if (window.initScrollAnimations) window.initScrollAnimations();
    if (window.initSmoothScroll) window.initSmoothScroll();
    if (window.initContactForm) window.initContactForm();
    if (window.initHeaderScroll) window.initHeaderScroll();
    if (window.initParticles) window.initParticles();
    if (window.initTiltEffect) window.initTiltEffect();
    if (window.initCounterAnimation) window.initCounterAnimation();
  }}, [location.pathname]);

  return (
    <div>
      {header}
      {nav}
      <main>
        <Outlet />
      </main>
      {footer}
    </div>
  );
}};

export default Layout;
"""
    
    layout_content = fix_jsx_attrs(layout_content)
    layout_content = fix_links(layout_content)
    # Replace anchor tags with Link
    layout_content = layout_content.replace('<a to=', '<Link to=').replace('</a>', '</Link>')
    
    write_file(os.path.join(components_dir, 'Layout.jsx'), layout_content)
    
    # Update App.jsx
    app_path = 'o:/Onloop/React_Web/src/App.jsx'
    app_content = read_file(app_path)
    if 'Layout' not in app_content:
        # Import Layout
        app_content = app_content.replace("import Home from './pages/Home.jsx';", "import Layout from './components/Layout.jsx';\nimport Home from './pages/Home.jsx';")
        
        # Replace <Routes> wrap with <Route element={<Layout />}>
        routes_pattern = re.compile(r'<Routes>(.*?)</Routes>', re.DOTALL)
        match = routes_pattern.search(app_content)
        if match:
            new_routes = f'<Routes>\n        <Route element={{<Layout />}}>{match.group(1)}        </Route>\n      </Routes>'
            app_content = app_content.replace(match.group(0), new_routes)
        write_file(app_path, app_content)

    # Clean up pages
    import glob
    for page_path in glob.glob(os.path.join(pages_dir, '*.jsx')):
        content = read_file(page_path)
        
        # Remove header, mobile nav, footer
        content = re.sub(r'<header className="header">.*?</header>', '', content, flags=re.DOTALL)
        content = re.sub(r'<nav className="nav--mobile">.*?</nav>', '', content, flags=re.DOTALL)
        content = re.sub(r'<footer className="footer">.*?</footer>', '', content, flags=re.DOTALL)
        
        content = fix_jsx_attrs(content)
        content = fix_links(content)
        content = content.replace('<a to=', '<Link to=').replace('</a>', '</Link>')
        
        # Add Link import if needed
        if 'Link' in content and 'react-router-dom' not in content:
            content = content.replace("import React from 'react';", "import React from 'react';\nimport { Link } from 'react-router-dom';")
            
        write_file(page_path, content)

    print("Refactoring complete.")

update_index_html()
refactor()
