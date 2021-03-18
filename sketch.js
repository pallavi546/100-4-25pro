
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;
var ground;
var ball;
var call;
var dust;
function preload()
{
	imageyou=loadImage("sode/dustbingreen.png")	
	
}

function setup() {
	createCanvas(800,700);
	groundSprite=createSprite(width/2, 670, width,10);
	groundSprite.shapeColor=color("yellow")

   
	engine = Engine.create();
	world = engine.world;
    // createSprite();
	//Create the Bodies Here.
	
	ball=new Paper(120,600,20);
	wall1=new Wall(600,655,180,20);
	wall2=new Wall(695,605,20,120)
	wall3=new Wall(505,605,20,120)
	
	
   
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  background("pink");
drawSprites();

  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();

imageMode(CENTER);
image(imageyou,600,570, 230, 200);


  
  
}
function keyPressed(){
  if (keyCode===32){
Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-65})
	
  }

}



