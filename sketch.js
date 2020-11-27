var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {

  var survivalTime = 0

  //creating monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x)

  FoodGroup = new Group();
  obstacleGroup = new Group();

  score = 0;
}


function draw() {
background("white")
  if(ground.x<0){
    ground.x=ground.width/2
  }
  spawnBanana()
  spawnObstacles()
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityX=0
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
  }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50);


drawSprites();

 stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
}
 function spawnBanana(){
   if(frameCount%200===0){
     banana=createSprite(600,250,40,10);
     banana.y=random(120,200);
     banana.velocityX=-5;
     banana.lifetime=300
     banana.scale=0.05;
     banana.addImage(bananaImage)
     FoodGroup.add(banana)
     
   }
 }
function spawnObstacles(){
   if(frameCount%250===0){
     obstacle=createSprite(800,320,10,40);
      obstacle.velocityX=-7;
       obstacle.lifetime=300
       obstacle.scale=0.15;
       obstacle.addImage(obstacleImage)
     obstacleGroup.add(obstacle)
     
   }
 }

  