//gamestates
var PLAY = 1;
var END = 0;
var gameState =1;

//variables
var alien1,aline2,fruit1,fruit2,fruit3,fruit4,sword;
var alien1Image,aline2Image,fruit1Image,fruit2Image,fruit3Image,
    fruit4Image,swordImage;
var   EnemyGroup,fruitGroup,score,gameOver,gameOverImage;
function preload(){

      alien1Image = loadAnimation("alien1.png");
      alien2Image = loadAnimation("alien2.png");
      fruit1Image = loadImage("fruit1.png");
      fruit2Image = loadImage("fruit2.png");
      fruit3Image = loadImage("fruit3.png");
      fruit4Image = loadImage("fruit4.png");
      swordImage = loadImage("sword.png");
    gameOverImage = loadImage("gameover.png");
                   }

function setup(){
  createCanvas(600, 400);
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  fruitGroup = createGroup();
  EnemyGroup = createGroup();
 
  score = 0
     
   gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImage);
   
  
  
}

function draw(){
   background(600);
   text("Score: "+ score, 500,50);
   if(gameState===PLAY){
     gameOver.visible = false
  fruits();
  Enemy();
   
    
  if(fruitGroup.isTouching(sword)){
    
    fruitGroup.destroyEach();
      score=score+10;
  }
     sword.y=World.mouseY;
sword.x=World.mouseX;
   }
drawSprites();
  


if(EnemyGroup.isTouching(sword)){
  gameState = END;
  gameOver.addImage(gameOverImage);
  alien1.velocityX = 0;

}
  if(gameState===END){
    gameOver.visible = true;
    sword.x=200;
    sword.y=200;
       
    
    
    
  }
      
      
      
      
      
      
  
     

  
  }
function fruits(){
 if(World.frameCount%60===0) {
   fruit = createSprite(400,200);
   fruit.scale = 0.2;
   //debbuging fruit
   r=Math.round(random(1,4));
   if(r===1){
     fruit.addImage(fruit1Image);
   }
   if(r===2){
   fruit.addImage(fruit2Image);
   }
  if(r===3) {
   fruit.addImage(fruit3Image);
   }
   if(r===4)  {
   fruit.addImage(fruit4Image);
   }
fruit.y=Math.round(random(50,340));
  fruit.velocityX = -12;
   fruit.setLifetime = 100;
   fruitGroup.add(fruit);
 }
 
 

}  
   function Enemy(){
     if(World.frameCount%100===0){
       alien1=createSprite(400,200,20,20);
       alien1.addAnimation("moving",alien1Image)
       alien1.y=Math.round(random(100,300));
      alien1.velocityX = -12;
       alien1.setLIfetime=50;
       
       EnemyGroup.add(alien1);
       
       
       
     }
     
     
     
     
     
     
     
   }
   
   
   
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

