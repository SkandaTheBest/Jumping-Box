var canvas;
var music;
var green, orange,pink,blue;
var jumper;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
   
    canvas = createCanvas(800,600);

    green = createSprite(700,590,180,20)
    green.shapeColor = ("green");
    
    orange = createSprite (500,590,180,20)
    orange.shapeColor = ("orange");

    pink = createSprite(300,590,180,20)
    pink.shapeColor = ("pink");

    blue = createSprite(100,590,180,20)
    blue.shapeColor = ("blue");
        
    jumper = createSprite(400,40,40,40)
    jumper.shapeColor = ("white");
    jumper.velocityY = 4;
    jumper.velocityX = 4;
    
}

function draw() {
    background(rgb(169,169,169));
  


       drawSprites();
    
}
