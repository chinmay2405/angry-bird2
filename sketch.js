const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,ground;
var pig1,log1,pig2,log2,log3,log4,bird;
var back ;

function preload(){
    back = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    
    box1 = new Box(800,550);
    box2 = new Box(1000,550);
    box3 = new Box(800,450);
    box4 = new Box(1000,450);
    box5 = new Box(900,300);

    pig1 = new Pig(900,550);
    pig2 = new Pig(900,430);

    log1 = new Log(900,500,275,PI/2);
    log2 = new Log(900,350,275,PI/2);
    log3 = new Log(870,300,120,PI/7.5);
    log4 = new Log(940,300,120,-PI/7.5);

    bird = new Bird(300,580);
    

}

function draw(){
    background(back);
    Engine.update(engine);
    box1.display();
    box2.display();
    box4.display();
    box3.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();
}