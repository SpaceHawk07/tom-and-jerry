var mouse, cat
var mouseImg, mousest, mouset, catImg, catst, catt, bg;


function preload() {
    //load the images here
    mouseImg=loadAnimation("mouse2.png, mouse3.png");
    mousest=loadImage("mouse1.png");
    mouset=loadImage("mouse4.png");

    catImg=loadAnimation("cat2.png, cat3.png");
    catst=loadImage("cat1.png");
    catt=loadImage("cat4.png");

    bg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(850, 700);
    cat.addImage(catst);

    mouse=createSprite(150, 700);
    mouse.addImage(mousest);

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    
   if(mouse.isTouching(cat)){
       mouse.addImage(mouset);
       cat.addImage(catt);
   }

   keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
  mouse.addAnimation(mouseImg);
  cat.addAnimation(catImg);
  cat.velocityX=3;
  }

}
