var mouse, cat
var mouseImg, mousest, mouset, catImg, catst, catt, bg;


function preload() {
    //load the images here
    mouseImg=loadAnimation("images/mouse2.png" ,  "images/mouse3.png");
    mousest=loadImage("images/mouse1.png");
    mouset=loadImage("images/mouse4.png");

    catImg=loadAnimation("images/cat2.png", "images/cat3.png");
    catst=loadImage("images/cat1.png");
    catt=loadImage("images/cat4.png");

    bg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(850, 700);
    cat.addImage(catst);
    cat.scale=0.2;
    cat.setCollider("circle", 20, 0, 500)

    mouse=createSprite(150, 700);
    mouse.addImage(mousest);
    mouse.scale=0.1;
    //cat.debug=true;
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
  cat.x=cat.x-3;
  }

}
