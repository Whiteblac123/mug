const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;
var blower
var door
var gameState
var ball
var gameState=1
var engine
var form
var blower6
var ground
var blowers=[]


function preload(){
paperImg = loadImage("coffee-cup-8-bit-pixel-concept-illustration-vector.jpg");
backgroundImg =loadImage("190872091.jpg")


}


function setup() {

	createCanvas(1400, 700);
	
	
	engine = Engine.create();
	world = engine.world; 

	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);
    
	ground=new Ground(width/2,670,width,20);
	blower = new Ground(width / 2 - 50, height / 2 +150, 150, 20);
	blower2 = new Ground(width / 2 - 200, height / 2 +150, 150, 20);
	blower3 = new Ground(width / 2 - 400, height / 2 +150, 150, 20);
	blower4 = new Ground(width/2+30,height/2+50,150,20);
    blower5 = new Ground(width/2+140,height/2-10,150,20);
	blower6 = new Ground(width / 2 +399, height / 2 +150, 150, 20);
	//blowers=[blower,blower2,blower3,blower4,blower5,blower6]
	Engine.run(engine);
}


function draw() {

	background(backgroundImg);
    
	push()
	imageMode(CENTER);
	image(paperImg,ball.position.x,ball.position.y,radius/2,radius/2);
	pop()	
    
	ground.display();
	blower4.display();
	blower.display();
	blower2.display();
	blower3.display();
	blower5.display();
	blower6.display();
	


 

	
	
	}


function Balls(ball, index) {
	ball.display();
	if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
	  Matter.World.remove(world, ball.body);
	  ball.splice(index, 1);
	}
  }


  function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball,ball.position,{x:15,y:-35});
	}

}

	

	
