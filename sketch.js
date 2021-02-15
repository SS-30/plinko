const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var divisions = []
var plinko = []
var divisionHeight=300

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  for(var k = 0;k <=width; k = k+80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight))
  }

  for(var j = 40;j <=width; j=j+50){
    plinko.push(new Plinko(j,75))
  }

  for(var j = 15;j <=width; j=j+50){
    plinko.push(new Plinko(j,175))
  }

  for(var j = 40;j <=width; j=j+50){
    plinko.push(new Plinko(j,275))
  }

  for(var j = 15;j <=width; j=j+50){
    plinko.push(new Plinko(j,375))
  }

  for(var j = 0; j< parricle.length; j++){
    particles[j].display()
  }

  for(var k = 0; j< divisions.length; k++){
    division[k].display()
  }

  drawSprites();
}