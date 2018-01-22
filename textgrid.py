import random, string
from PIL import Image, ImageDraw

alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ']

vardict = {}

for i in range(len(alpha)):
	vardict[alpha[i]] = (i *5 ,i * 5,i * 5)

color = (255,255,255)
labyrinthImage = Image.new("RGB",(1100,1700),color)
pixel = labyrinthImage.load()

xcounter = 0
ycounter = 0

with open('aleph.txt', 'r') as f:
	words = f.read().split('.')
num_words = len(words)
text = words[random.randint(0,num_words)]
textlower = text.lower()
textfix = "".join((char for char in textlower if char in alpha))
data = textfix.split()
title = ""
yrange = len(data)
ysize = int(1700/yrange)

for i in range(yrange):
	title += data[i] + '_'
	xcounter = 0
	xsize = int(1100/len(data[i]))
	xwidth = int(1100/xsize)
	for j in range(xwidth):
		color = vardict[data[i][j]]
		for x in range(xcounter, xcounter + xsize):
			for y in range(ycounter, ycounter + ysize):
				pixel[x,y] = color
			xcounter = x
	ycounter = y
print(title)
labyrinthImage.show()
labyrinthImage.save(title + ".jpg", "JPEG")


