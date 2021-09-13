var welcomeScreenImg, buttonImg, Start;
var gameState = 0;
var ScramblerImg;
var Shuffler, ShufflerImg;
var SCslide1, SCslide2, SCslide3, SCslide4, SCslide5, SCslide6, SCslide7, SCslide8, SCslide9;

function preload(){
	welcomeScreenImg = loadImage("Racing Flag.png")
	buttonImg = loadImage("Start.png")
	ScramblerImg = loadImage("Scrambler1.png")
	ShufflerImg = loadImage("Shuffler.png")
}

function setup() {
	createCanvas(800, 700);  

	Start = createSprite(width/2, height/2)
	Start.addImage(buttonImg)
	Start.scale = 0.1 

	Scrambler = createSprite(600,150)
	Scrambler.addImage(ScramblerImg)
	Scrambler.scale = 3
	Scrambler.visible = false 

	Shuffler = createSprite(360,100)
	Shuffler.addImage(ShufflerImg)
	Shuffler.scale = 0.2
	Shuffler.visible = false
	scrambler()


}


function draw() {  
	if(gameState == 0){
		background(welcomeScreenImg)
	if(mousePressedOver(Start)){
		gameState = 1
		Start.visible = false 
	}
}
	if(gameState == 1){
		background("white")
		Shuffler.visible = true 
		Scrambler.visible = true
	}

  drawSprites();
 
}

function scrambler(){
	//First Row
	SCslide1 = createSprite(Scrambler.x - 80,140,62,56)
	SCslide1.shapeColor = "red"
	SCslide2 = createSprite(Scrambler.x - 18,140,62,56)
	SCslide2.shapeColor = "blue"
	SCslide3 = createSprite(Scrambler.x + 45,140,62,56)
	SCslide3.shapeColor = "yellow"

	//Second Row
	SCslide4 = createSprite(Scrambler.x - 80,188,62,56)
	SCslide4.shapeColor = "green"
	SCslide5 = createSprite(Scrambler.x - 18,188,62,56)
	SCslide5.shapeColor = "yellow"
	SCslide6 = createSprite(Scrambler.x + 45,188,62,56)
	SCslide6.shapeColor = "red"

	//Third Row
	SCslide7 = createSprite(Scrambler.x - 80,244,62,56)
	SCslide7.shapeColor = "yellow"
	SCslide8 = createSprite(Scrambler.x - 18,244,62,56)
	SCslide8.shapeColor = "green"
	SCslide9 = createSprite(Scrambler.x + 45,244,62,56)
	SCslide9.shapeColor = "blue"
	



}



