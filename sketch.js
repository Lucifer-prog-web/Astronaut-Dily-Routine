var bath,bathImg,brush,brushImg,drink,eat,eatImg,gym,gymImg,gym2,gymImg2,iss,move,moveImg,sleep,sleepImg,astronaut

function preload(){

  bathImg = loadAnimation("Astronaut's daily routine/bath1.png","Astronaut's daily routine/bath2.png");
  brushImg = loadImage("Astronaut's daily routine/brush.png");
  drinkImg = loadAnimation("Astronaut's daily routine/drink1.png","Astronaut's daily routine/drink2.png");
  eatImg = loadAnimation("Astronaut's daily routine/eat1.png","Astronaut's daily routine/eat2.png");
  gymImg = loadAnimation("Astronaut's daily routine/gym1.png","Astronaut's daily routine/gym2.png");
  gymImg2 = loadAnimation("Astronaut's daily routine/gym11.png","Astronaut's daily routine/gym12.png");
  issImg = loadImage("Astronaut's daily routine/iss.png");
  moveImg = loadAnimation("Astronaut's daily routine/move.png","Astronaut's daily routine/move1.png");
  sleepImg = loadImage("Astronaut's daily routine/sleep.png");
  
}
function setup() {
  createCanvas(800,600);
  
astronaut = createSprite(400, 400, 50, 50);
astronaut.addImage("sleeping",sleepImg);
astronaut.scale = 0.1;

text("Instructions",100,100);
textSize(20)

  


}

function draw() {
  background(issImg); 
  
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gymImg);
    astronaut.changeAnimation("gyming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eatImg);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  
  
  
  drawSprites();
}