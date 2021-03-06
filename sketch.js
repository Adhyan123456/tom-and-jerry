var mouse,mouseCollided,mouseMoving,garden,gardenImg;
var cat,catImg,catCollided,catMoving,mouseImg;

function preload() {
    //load the images here
catImg=loadImage("images/cat1.png");
catMoving=loadAnimation("images/cat2.png","images/cat3.png");
catCollided=loadImage("images/cat4.png");
mouseImg=loadImage("images/mouse1.png");
mouseMoving=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseCollided=loadImage("images/mouse4.png");
gardenImg=loadImage("images/garden.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites her
   garden=createSprite(500,500,1000,800);
   garden.addImage(gardenImg);
   
   mouse=createSprite(300,720,20,20);
   mouse.addImage(mouseImg);
   mouse.scale=0.1;
   
   
   
    cat=createSprite(647,720,20,20);
    cat.addImage(catImg);
    cat.scale=0.1;







}

function draw() {

    background(255);
text( mouseX + ',' + mouseY,10,45);

    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x < (cat.width-mouse.width)/2){
cat.velocityX=0;
cat.x=360;
cat.addAnimation("catstop",catCollided);
cat.changeAnimation("catstop");

mouse.addAnimation("mousestp",mouseCollided);
mouse.changeAnimation("mousestp");

}




    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode == LEFT_ARROW){
cat.velocityX= -5;
cat.addAnimation("catmove",catMoving);
cat.changeAnimation("catmove");

mouse.addAnimation("mouse dance",mouseMoving);
mouse.changeAnimation("mousedance");
}}

