const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    pendilum = new Box(50,100,50,50);

    support=new Support(200,80,300,20);

    chain=new CHAIN(pendilum.body,support.body);

}

function draw(){
    background(255,255,255);
    Engine.update(engine);

    text("Press space bar to position the pendulam left and right with mouse",10,20);
    text("Press any key(not enter) to start the oscillation",100,50);

    if(keyCode===32){
    pendilum.body.position.x = mouseX;
    pendilum.body.position.y = mouseY;
    }

    if(keyCode===ENTER){
        pendilum.position.x=200;
    }




    pendilum.display();
    support.display();
    chain.display();
}
