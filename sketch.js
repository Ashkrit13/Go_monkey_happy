
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey = createSprite(80,385,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
ground = createSprite(600,395,2000,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  score=0;
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("white");
  fill("black");
  textSize(15);
  score=Math.ceil(frameCount/frameRate()) 
  text("Survival time: "+score, 200,100);
 
  if(ground.x<0){
     ground.x=ground.width/2;
     }
  if(keyDown("space")){
    monkey.velocityY= -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  banana();
  obstacles();
  drawSprites();
  
   if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    }
  
}

function banana(){
  if (frameCount % 80 === 0){
    var banana = createSprite(600,405,10,40);
    banana.y = Math.round(random(500,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    FoodGroup.add(banana);
 }
}

function obstacles(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(600,375,40,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}

