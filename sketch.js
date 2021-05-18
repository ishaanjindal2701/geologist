const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

box1=new Box(300,550,90,50);
box2=new Box(450,550,90,50);
circle=new Circle(550,400,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
box2.display();
box1.display();
circle.display();
    plane.display();
    hammer.display();
text(mouseX+","+mouseY,mouseX,mouseY)
    
 
}