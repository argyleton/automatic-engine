import random
from PIL import Image, ImageDraw, ImageFont

with open('/usr/share/dict/words', 'r') as f:
    words = f.read().splitlines()
    num_words = len(words)
name = words[random.randint(0,num_words)]
#name = 'Kazimir Malevich'
font = ImageFont.truetype("Baumans-Regular.ttf", 60)

color = (150,150,150)
labyrinthImage = Image.new("RGB",(2400,3300),random.choice([color,'white']))

draw = ImageDraw.Draw(labyrinthImage)
colorList = ['red','white','black','black','red','red', 'gray']
#draw.polygon([(0,50), (50,250),(75, 225),(25,25)], fill='black')

functList = []

def drawSquare():
	color = random.choice(colorList)
	dimension = random.randrange(25,2100,25)
	x1 = random.randrange(0,2100,25)
	y1 = random.randrange(0,2100,25)
	draw.rectangle((x1,y1,x1+dimension,y1+dimension), fill=color)

def drawRectangle():
	color = random.choice(colorList)
	x = random.randrange(0,2400,25)
	y = random.randrange(0,3300,25)
	x1 = random.randrange(0,2400,25)
	y1 = random.randrange(0,3300,25)
	draw.rectangle((x,y,x1,y1), fill=color)

def drawWRectangle():
	x = random.randrange(0,2400,25)
	y = random.randrange(0,3300,25)
	x1 = random.randrange(0,2400,25)
	y1 = random.randrange(0,3300,25)
	draw.rectangle((x,y,x1,y1), fill='white')

def drawLines():
	color = random.choice(colorList)
	lineWidth = random.randrange(25,900,25)
	x = random.randrange(25,2400,25)
	y = random.randrange(25,3300,25)
	x1 = random.randrange(25,2400,25)
	y1 = random.randrange(25,3300,25)
	draw.line((x,y,x1,y1), width=lineWidth, fill=color)

def drawParallels():
	color = random.choice(colorList)
	lineWidth = random.randrange(25,900,25)
	x = random.randrange(25,2400,25)
	y = random.randrange(25,3300,25)
	x1 = random.randrange(25,2400,25)
	y1 = random.randrange(25,3300,25)
	numLines = random.randint(1,5)
	for i in range(numLines):
		draw.line((x,y,x1,y1), width=lineWidth, fill=color)
		span = lineWidth/2
		x += (span + 300)
		y += (span + 300)
		x1 += (span + 300)
		y1 += (span + 300)
		color = random.choice(colorList)

functList = [drawParallels, drawLines, drawSquare, drawRectangle, drawWRectangle]

numFuncs = random.randint(3,7)

for i in range(numFuncs):
	random.choice(functList)()

labyrinthImage.show()
print(name)
labyrinthImage.save(name + ".jpg", "JPEG", dpi=(300.0, 300.0))