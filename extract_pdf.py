import pdfplumber

def extract_pdf_style_info(pdf_path):
    colors = set()
    fonts = set()
    
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            for char in page.chars:
                fonts.add(char.get('fontname', 'Unknown'))
                colors.add(char.get('non_stroking_color', 'Unknown'))
            for rect in page.rects:
                colors.add(rect.get('non_stroking_color', 'Unknown'))
                colors.add(rect.get('stroking_color', 'Unknown'))
            for curve in page.curves:
                colors.add(curve.get('non_stroking_color', 'Unknown'))
                colors.add(curve.get('stroking_color', 'Unknown'))

    print("--- FONTS ---")
    for f in fonts:
        print(f)
    print("--- COLORS ---")
    for c in colors:
        print(c)

if __name__ == "__main__":
    extract_pdf_style_info('D:/sparkvr/brand-guideline.pdf')
