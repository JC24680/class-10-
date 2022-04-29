
var trex ,trex_running;
var ground, groundImage;
var edges;

function preload(){
  
trexRunning=loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage=loadImage("ground2.png")
}

function setup()
{
  createCanvas(600,200)
  
  //create a trex sprite

 trex = createSprite(50,180,20,50);
 trex.addAnimation("running", trexRunning);
//adding scale and position to trex
trex.scale = 0.5;

edges=createEdgeSprites();

ground = createSprite(200,180,400,20)
ground.addImage("ground",groundImage)
ground.x = ground.width /2;
}

function draw()
{
  background("white")

ground.velocityX=-2;
console.log(ground.x)
//jumping the trex on space key press
if(keyDown("space")) 
{
  trex.velocityY = -10;
}

if (ground.x<0)
{
  ground.x = ground.width/2;
}



trex.velocityY = trex.velocityY + 0.8
trex.collide(edges[3])

  drawSprites();

}
