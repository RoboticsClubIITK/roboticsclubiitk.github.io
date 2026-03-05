import urllib.request
import json
import re
import sys

try:
    url = 'https://docs.arduino.cc/page-data/learn/starting-guide/getting-started-arduino/page-data.json'
    html = urllib.request.urlopen(url).read().decode('utf-8')
    
    # Extract paragraphs
    p_matches = re.findall(r'mdx\(\\"p\\",\s*\{\},\s*\\"(.*?)\\"\\)', html)
    # Extract headers
    h_matches = re.findall(r'mdx\(\\"h[2-6]\\",\s*\{.*?\},\s*\\"(.*?)\\"\\)', html)
    
    # Simple extraction to just grab the raw text components from the MDX payload
    raw_text_blocks = re.findall(r'\\"(.*?)\\"', html)
    
    # Filter for things that look like actual sentences/paragraphs (basic heuristic)
    valid_blocks = []
    for block in raw_text_blocks:
        block = block.replace('\\n', ' ').replace('\\"', '"').replace('\\\\', '\\')
        if len(block) > 40 and ' ' in block and not block.startswith('component---') and not '{' in block:
            # Strip remaining html tags if any
            clean_block = re.sub(r'<[^>]+>', '', block)
            valid_blocks.append(clean_block)
            
    header = """---
title: "Getting Started with Arduino"
description: "A comprehensive guide to getting started with Arduino, extracted exactly from the official docs."
---

# Getting Started with Arduino

"""
    
    with open('src/content/resources/arduino.md', 'w', encoding='utf-8') as f:
        f.write(header + '\n\n'.join(valid_blocks))
        
    print("Successfully extracted and wrote content.")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
