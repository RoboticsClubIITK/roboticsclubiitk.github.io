import urllib.request
import os

url = 'https://md.dhr.wtf/?url=https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/'

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req)
    raw_md = response.read().decode('utf-8')
    
    header = """---
title: "Getting Started with Arduino"
description: "A comprehensive guide to getting started with Arduino, extracted exactly from the official docs."
---

"""
    
    with open('src/content/resources/arduino.md', 'w', encoding='utf-8') as f:
        f.write(header + raw_md)
        
    print("Successfully downloaded and wrote Markdown content.")
except Exception as e:
    print(f"Error fetching markdown: {e}")
