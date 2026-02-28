import os
import re

target_files = [
    "index.html",
    "solar.html",
    "wind.html",
    "epc-services.html",
    "om-services.html",
    "consulting.html",
    "about.html",
    "contact.html",
    "hybrid.html"  # Included hybrid this time
]

with open("new_footer_content.html", "r", encoding="utf-8") as f:
    new_footer = f.read()

# Regex to find the footer block
# Matches <footer class="footer"> ... </footer>
footer_regex = re.compile(r'<footer class="footer">.*?</footer>', re.DOTALL)

for file in target_files:
    if os.path.exists(file):
        print(f"Updating {file}...")
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Check if footer exists
        if footer_regex.search(content):
            new_content = footer_regex.sub(new_footer, content)
            with open(file, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated {file}")
        else:
            print(f"Footer not found in {file}")
    else:
        print(f"File {file} not found")
