const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;
var ground;
var div1,div2,div3,div4,div5,div6,div7;

var particles=[];
var plinkos=[
  
  
];
var division=[];
//var divisionHeight=300;

function setup(){
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  for(var j = 40; j <=width; j=j+50){

    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j=j+50){

    plinkos.push(new Plinko(j,175));
  }

 

  ground=new Ground(240,760,480,20);

  div1=new Division(4,620,6,300);
  div2=new Division(476,620,6,300);
  div3=new Division(84,620,6,300);
  div4=new Division(164,620,6,300);
  div5=new Division(244,620,6,300);
  div6=new Division(324,620,6,300);
  div7=new Division(404,620,6,300);

  


 

  
  
  


}

function draw(){

  background(0);
  Engine.update(engine);
  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  particleSpawn();
  
 
}

function particleSpawn(){

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
}
