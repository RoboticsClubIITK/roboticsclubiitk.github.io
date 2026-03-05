import PyPDF2

def extract():
    with open('public/IRC-2026-Rulebook (7).pdf', 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for i, page in enumerate(reader.pages):
            text += f"\n--- Page {i+1} ---\n"
            text += page.extract_text()
            
    with open('scripts/rulebook.md', 'w', encoding='utf-8') as f:
        f.write(text)
        
if __name__ == '__main__':
    extract()
    print("Done extracting rulebook.")
