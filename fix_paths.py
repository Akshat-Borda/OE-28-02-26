import glob
import os

paths = glob.glob('o:/Onloop/React_Web/src/**/*.jsx', recursive=True)

for path in paths:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Image src
    content = content.replace('src="images/', 'src="/images/')
    
    # CSS url
    content = content.replace('url("images/', 'url("/images/')
    content = content.replace("url('images/", "url('/images/")
    
    # Video source
    content = content.replace('src="videos/', 'src="/videos/')

    # Just in case there are other hrefs to .html that weren't caught
    # e.g. <a href="solar.html" -> <Link to="/solar"
    # we already handled the exact matches, let's see to be sure

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Paths fixed.')
