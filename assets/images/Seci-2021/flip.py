from PIL import Image, ImageOps
import sys

im = Image.open(sys.argv[1])

im_flip = ImageOps.flip(im)

im_mirror = ImageOps.mirror(im)
im_mirror.save(sys.argv[1], quality=95)