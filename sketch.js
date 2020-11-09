const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
	world = engine.world;
 ground = new Ground(450,380,900,20);
 stand1 = new Stand(390,300,250,10);
 stand2 = new Stand(700,200,200,10);

 //first row
box0 = new Box(300,275,30,40);
 box1 = new Box(300,275,30,40);
 box2 = new Box(330,275,30,40);
 box3 = new Box(360,275,30,40);
 box4 = new Box(390,275,30,40);
 box5 = new Box(420,275,30,40);
 box6 = new Box(450,275,30,40);
 

//second row
box7 = new Box(330,235,30,40);
 box8 = new Box(360,235,30,40);
 box9 = new Box(390,235,30,40);
 box10 = new Box(420,235,30,40);
 box11 = new Box(450.235,30,40);

 //third row

 box12 = new Box(360,195,30,40);
 box13 = new Box(390,195,30,40);
 box14 = new Box(420.195,30,40);

 //fourth row
 box15 = new Box(390.155,30,40);



 b0 = new Box(640,175,30,40);
 b1 = new Box(670,175,30,40);
 b2 = new Box(700,175,30,40);
 b3 = new Box(730,175,30,40);
 b4 = new Box(760,175,30,40);

 b5 = new Box(675,135,30,40);
 b6 = new Box(700,135,30,40);
 b7 = new Box(730,135,30,40);

 b8 = new Box(700,95,30,40);

 ball = Bodies.circle(50,200,20); 
 World.add(world,ball); 
 slingshot = new Slingshot(this.ball,{x:100,y:200});
}

function draw() {
  background("pink"); 

  Engine.update(engine);
  fill("brown")
  ground.display(); 
  fill("red")
  stand1.display();
  stand2.display();
  fill("blue")
  box0.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  fill("green")
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  fill("yellow")
  box12.display();
  box13.display();
  fill("white")
  box14.display();

  b0.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  fill("lightblue")
  b5.display();
  b6.display();
  b7.display();
  fill("orange")
  b8.display();
  
slingshot.display();
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}
function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY}); } 
  function mouseReleased()
  { slingshot.fly(); }