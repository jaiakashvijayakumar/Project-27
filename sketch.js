
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constrait = Matter.constrait;

var ground

function preload()
{
	
}

function setup() {
	createCanvas(1700, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	 ground = new Ground(720,200,250,10);


  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
 
  
}



