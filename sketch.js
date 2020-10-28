const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground,box1,box2;
var engine,world;



function setup() {

 var canvas= createCanvas(400,400);
engine=Engine.create();
world=engine.world;
ground=new Ground(200,390,400,20);
box1=new Box(200,300,50,50);
box2= new Box(240,100,50,50);
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  //rectMode(CENTER);
  //(ground.position.x,ground.position.y,350,20)
  //ellipseMode(RADIUS);
 // ellipse(ball.position.x, ball.position.y, 20, 20);
  //background(255,255,255);  
 //drawSprites();
}