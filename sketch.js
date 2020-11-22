const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;


function setup() {
  
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(240,790,480,10);
}

function draw() {
  background("black");  
  drawSprites();

  ground.display();
}