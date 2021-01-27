var ground,groundimage;
var cat,catimage,catimage1,catimage2;
var mouse,mouseimage;

function preload() {
    //load the images here
groundimage = loadImage("images/garden.png");
catimage = loadImage("images/tomOne.png");
mouseimage = loadImage("images/jerryOne.png");
catimage1 = loadAnimation("images/tomTwo.png");
catimage2 = loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
ground = createSprite(500,400,500,400);
ground.addImage(groundimage);

cat = createSprite(800,600,20,20);
cat.addImage(catimage);
cat.scale = 0.1;

mouse = createSprite(200,600,20,20);
mouse.addImage(mouseimage);
mouse.scale = 0.1;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

cat.velocityX = 0;

if(keyDown (LEFT_ARROW)){
    cat.velocityX = -3;
cat.addAnimation("running",catimage1);
cat.changeAnimation("running");
}

if(cat.isTouching(mouse)){
    mouse.destroy();
    cat.velocityX = 0;
    cat.addAnimation("eating",catimage2);
    cat.changeAnimation("eating");

}


    
    drawSprites();
}


  






