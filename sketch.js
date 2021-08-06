var sea,ship;
var seaimg,shipimg
function preload(){
  seaming = loadImage("sea.png")
  seaming = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png")
}

function setup(){
  createCanvas(400,400);
  background("blue")

  sea=createSprite(4050,200);
  sea.addImage(seaming);
  sea.velocityX = -5;
  sea.scale=0.3;

  ship=createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipimg);
  sea.scale=0.25;
}

function draw() {
  background("0");
  sea.velocityX = -3;

  if(sea.x < 0){
  sea.x = sea.width/8; 
}
drawSprites();
}