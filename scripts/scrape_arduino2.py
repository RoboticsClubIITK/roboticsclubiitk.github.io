import urllib.request
from bs4 import BeautifulSoup
import re

html = urllib.request.urlopen('https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/').read()
soup = BeautifulSoup(html, 'html.parser')

# Find the main tutorial content (often inside the 'content' or 'page-layout' div on Arduino docs)
main_content = soup.find('div', class_='content') or soup.find('div', class_='page-layout') or soup.body

if main_content:
    text = main_content.get_text(separator='\n\n', strip=True)
else:
    text = soup.get_text(separator='\n\n', strip=True)

# Try to find the start of the actual tutorial to strip headers/footers
start_idx = text.find('Getting Started with Arduino')
if start_idx != -1:
    text = text[start_idx:]

end_idx = text.find('Was this article helpful?')
if end_idx != -1:
    text = text[:end_idx]

out = f"""---
title: "Getting Started with Arduino"
description: "Exact copy of official docs."
---

# Getting Started with Arduino

{text}
"""

with open('src/content/resources/arduino.md', 'w', encoding='utf-8') as f:
    f.write(out)

print("success")
