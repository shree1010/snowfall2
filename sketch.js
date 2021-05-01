const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var boy;
var boy1,boyImg;
var engine, world,Matter;
var backgroundImg;
var snowfallImg;
var snowfall;
function preload(){
  backgroundImg=loadImage("snow1.jpg");
  boyImg=loadImage("boy.png")
  
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //snowfall=new Snowfall(200,200,30);
  //boy=new Boy(200,300,20);
  boy1=createSprite(200,300)
  boy1.addImage("boy",boyImg);
  boy1.scale=0.2
}

function draw() {
  background(backgroundImg);  
  
 //boy.display();
  //snowfall.display();
  if(frameCount%5===0){
    //snowfall.display();
    snowfall=new Snowfall(random(100,700),20,30)
    snowfall.display();
    console.log("snowfall")
  }
  drawSprites();
}


