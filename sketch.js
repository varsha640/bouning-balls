const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies                                                                                                                                                                                                                    


var universe,earth;
var human,ball;
var box1
var box2
var ground1
function setup() { 
  createCanvas(400,400);
  universe = Engine.create(); // universe.world
  earth  = universe.world;

  box1 = new Box(230,200,50,60)
box2=new Box(200,350,60,70)

ground=new Ground(200,380,400,10)
}

function draw() {
  Engine.update(universe)
  background(0); 
  
  box1.display();
 box2.display();
ground.display();
}