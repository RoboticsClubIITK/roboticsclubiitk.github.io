
# pip install pillow
#  python3 jpg_converter.py *.jpeg ya fir *.png

import os
import sys
from PIL import Image

if len(sys.argv) > 1:
    n = 1
    while 1 :
        try :
            os.path.exists(sys.argv[n])
            file =sys.argv[n]
            filename=file.split(".")
            img = Image.open(file)
            target_name = filename[0] + ".jpg"
            rgb_image = img.convert('RGB')
            rgb_image.save(target_name)
            os.remove(file)        # optional : if you want to remove the other format file
            print("Converted image saved as " + target_name)
            n = n+1
        except IndexError:
            print("Shayad ho gaya.....check kar le")
            break
else:
    print("please execute the script with input image as : python jpg_convert.py <file>")

