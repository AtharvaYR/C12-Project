var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(220);
  
  console.log(rabbit.frameCount)
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnapples()
  
  
  drawSprites();
}




function spawnapples(){

  if (frameCount%40==0) {
    apple = createSprite(100,0,10,10);
    apple.addImage("apple",appleImage);
    apple.scale=0.1;
    apple.velocityY = 6;
    apple.x=Math.round(random(40,200))
    
   
    rabbit.depth=apple.depth;
  
    rabbit.depth+=1;
    
    
  
  }

}