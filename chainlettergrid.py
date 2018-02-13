import random
from PIL import Image, ImageDraw

with open('/usr/share/dict/words', 'r') as f:
    words = f.read().splitlines()
    num_words = len(words)
filename = words[random.randint(0,num_words)]
grey = random.randint(0,255)
a = (random.randint(0,255),random.randint(0,50),random.randint(0,50))
b = (random.randint(0,100),random.randint(0,100),random.randint(0,100))
c = (random.randint(0,100),random.randint(0,100),random.randint(0,100))
d = (grey, grey, grey)

color = random.choice([a,b,c,d])
labyrinthImage = Image.new("RGB",(800,1100),color)
pixel = labyrinthImage.load()

xcounter = 0
ycounter = 0
x1 = 100
x2 = 800
x3 = 200
x4 = 400
height = 1100
with open(filename + '_chainletter_text' + '.txt', 'w') as the_file:
	ysize = random.choice([50,100,150])
	for i in range(10):
		xcounter = 0
		xsize = random.choice([x1,x2,x3])
		xwidth = int(800/xsize)
		the_file.write('row: ' + str(i) + ' x: ' + str(xsize) + ' ' + 'y: ' + str(ysize) +'\n')
		for i in range(xwidth):
			color = random.choice([a,b,c,d])
			for x in range(xcounter, xcounter + xsize):
				for y in range(ycounter, ycounter + ysize):
					pixel[x,y] = color
				xcounter = x
		ycounter = y
		height = height - ycounter
		if height < 100:
			ysize = 75
		else:
			ysize = random.choice([100,200,150])
print(filename)
labyrinthImage.show()
labyrinthImage.save(filename + "_chainletter.jpg", "JPEG")