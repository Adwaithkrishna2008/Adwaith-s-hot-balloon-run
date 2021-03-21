var balloon,balloonImg;
var sky,skyimg;
var edges;
var gameState="play";
var obstacle1,obstacle2,obstacle3,obstacle4;
var obstacle1Img,obstacle2Img,obstacle3Img,obstacle4Img;
var fuel,fuelImg,fuelG;
var
obstacle1G,obstacle2G,obstacle3G,obstacle4;
var restart,restartImg;
var score=0,lives=3;
var HSound;

function preload(){
skyImg=loadImage("sky.jpg");
balloonImg=loadImage("balloon.hot.png");
obstacle1Img=loadImage("obstacle1.png");
obstacle2Img=loadImage("obstacle2.png");
obstacle3Img=loadImage("obstacle3.png");
obstacle4Img=loadImage("obstacle4.png");
restartImg=loadImage("restart.png");
HSound=loadSound("hitS.mp3")
fuelImg=loadImage("fuel.png");
}

function setup() {

  createCanvas(300,400)
  
 
 
  
  
sky=createSprite(200,200)
 sky.addImage(skyImg);
 
restart=createSprite(150,200)
restart.addImage(restartImg);
restart.scale=0.75
  
  
  
  balloon=createSprite(200,350)
 balloon.addImage(balloonImg);
balloon.scale=0.35;

obstacle1G=new Group();
obstacle2G=new Group();
obstacle3G=new Group();
obstacle4G=new Group();
fuelG=new Group();
}

function draw() {
 background(255);
  
   
  
    
  
  
  
  if(gameState==="play"){
    
score = score+Math.round(getFrameRate()/60);

balloon.x=World.mouseX;
edges= createEdgeSprites();
balloon.collide(edges);
  
 sky.velocityY = -(6 + 3*score/100);  
  
    
    
    
    
sky.velocityY=4;
  
  if(sky.y>400){
    sky.y=300;
    }
    
    restart.visible=false;
    
    if(obstacle1G.y>390){
    score=score+1;
    
}  if(obstacle2G.y>390){
    score=score+1;
    
}   if(obstacle3G.y>390){
    score=score+1;
    
}  if(obstacle4G.y>390){
   score=score+1;
    
}
    
    

    
OB1();
OB2();
OB3();
OB4();
fuels();
  } if(balloon.isTouching(obstacle1G)){
    HSound.play();
    lives=lives-1;
     obstacle1G.destroyEach();
    
  } if(balloon.isTouching(obstacle2G)){
   HSound.play();
    lives=lives-1;
     obstacle2G.destroyEach();
    
  } if(balloon.isTouching(obstacle3G)){
    HSound.play();
    lives=lives-1;
     obstacle3G.destroyEach();
    
  } if(balloon.isTouching(obstacle4G)){
    HSound.play();
    lives=lives-1;
     obstacle4G.destroyEach();
  }
  if(balloon.isTouching(fuelG)){
   
    lives=lives+1;
     fuelG.destroyEach();
  }
    
  if(lives===0){
    gameState="end";
  }
  
  
     
  
  if(gameState==="end"){
    
   obstacle1G.destroyEach();
   obstacle2G.destroyEach();
   obstacle3G.destroyEach();
   obstacle4G.destroyEach();
    fuelG.destroyEach();
    sky.velocityY=0;
     restart.visible=true;
    
    
  }
  if(mousePressedOver(restart)) {
      reset();
    }else if(keyDown("space")) {
      reset();
    }
 
 
  
  
  drawSprites();

  fill("red")
  text("score:"+score,200,50)
   
    
  fill("black")
   text("lives:"+lives,20,50)

}


function OB1(){
  
  if(frameCount%170===0){
  obstacle1=createSprite(200,200,30,30);
  obstacle1.scale=0.25;
  obstacle1.addImage(obstacle1Img);
  obstacle1.velocityY=5;
  obstacle1.lifetime=800;
  obstacle1G.add(obstacle1);
    
  obstacle1.x=Math.round(random(10,130))
  }
}
  
  function OB2(){
  if(frameCount%190===0){
  obstacle2=createSprite(200,140,30,30);
  obstacle2.scale=0.15;
  obstacle2.addImage(obstacle2Img);
  obstacle2.velocityY=5;
  obstacle2.lifetime=800;
  obstacle2G.add(obstacle2);
    
  obstacle2.x=Math.round(random(30,300))
  }
  
  
}


function OB3(){
  if(frameCount%200===0){
  obstacle3=createSprite(200,150,30,30);
  obstacle3.scale=0.25;
  obstacle3.addImage(obstacle3Img);
  obstacle3.velocityY=5;
  obstacle3.lifetime=800;
  obstacle3G.add(obstacle3);
    
  obstacle3.x=Math.round(random(20,210))
  }
  
  
}

function OB4(){
  if(frameCount%180===0){
  obstacle4=createSprite(200,130,30,30);
  obstacle4.scale=0.35;
  obstacle4.addImage(obstacle4Img);
  obstacle4.velocityY=5;
  obstacle4.lifetime=800;
  obstacle4G.add(obstacle4);
    
  obstacle4.x=Math.round(random(40,250))
  }
  

  
}

 function fuels(){
  if(frameCount%340===0){
  fuel=createSprite(200,140,30,30);
  fuel.scale=0.10;
  fuel.addImage(fuelImg);
  fuel.velocityY=5;
  fuel.lifetime=800;
  fuelG.add(fuel);
    
  fuel.x=Math.round(random(30,200))
  }
 }


function reset(){
  gameState = "play";
  
  restart.visible = false;
  
  obstacle1G.destroyEach();
  obstacle2G.destroyEach();
  obstacle3G.destroyEach();
  obstacle4G.destroyEach();
  fuelG.destroyEach();
  
  score = 0;
  lives=3 ;
}

