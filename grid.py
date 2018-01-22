import random
from PIL import Image, ImageDraw

with open('/usr/share/dict/words', 'r') as f:
    words = f.read().splitlines()
    num_words = len(words)
filename = words[random.randint(0,num_words)]
grey = random.randint(0,255)
a = (0,0,0)
b = (random.randint(0,255),random.randint(0,100),random.randint(0,100))
c = (random.randint(0,255),random.randint(0,150),random.randint(0,150))
d = (grey, grey, grey)

color = random.choice([a,b,c,d])
labyrinthImage = Image.new("RGB",(1100,1700),color)
pixel = labyrinthImage.load()

xcounter = 0
ycounter = 0
x1 = 100
x2 = 1100
x3 = 550
height = 1700
with open(filename + '_text' + '.txt', 'w') as the_file:
	ysize = random.choice([50,200,100,250])
	for i in range(12):
		xcounter = 0
		xsize = random.choice([x1,x2,x3])
		xwidth = int(1100/xsize)
		the_file.write('row: ' + str(i) + ' x: ' + str(xsize) + ' ' + 'y: ' + str(ysize) +'\n')
		for i in range(xwidth):
			color = random.choice([a,b,c,d])
			for x in range(xcounter, xcounter + xsize):
				for y in range(ycounter, ycounter + ysize):
					pixel[x,y] = color
				xcounter = x
		ycounter = y
		height = height - ycounter
		if height - ycounter > 500:
			ysize = random.choice([300,300,300,200,100])
		elif 500 > height - ycounter > 200:
			ysize = random.choice([200,100])
		else:
			ysize = 100

labyrinthImage.show()
labyrinthImage.save(filename + ".jpg", "JPEG")