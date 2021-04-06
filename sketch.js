var bg,bgImg;
var mouse1,mousImg1,mouseImg2,mouseImg3,mouseImg4;
var cat,catImg1,catImg2,catImg3,catImg4;
function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    catImg1 = loadAnimation("cat1.png")
    catImg3 = loadAnimation("cat2.png","cat3.png")
    catImg4 = loadAnimation("cat4.png")
    mouseImg1 = loadAnimation("mouse1.png")
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png")
    mouseImg3 = loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


    cat = createSprite(850,600,20,20)
    cat.addAnimation("sit",catImg1)
    cat.scale = 0.20

    mouse1 = createSprite(200,600)
    mouse1.addAnimation("stand",mouseImg1)
    mouse1.scale = 0.20
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("left")){
        mouse1.addAnimation("mouseT", mouseImg2)
        mouse1.changeAnimation("mouseT")

        cat.addAnimation("catR", catImg3)
        cat.changeAnimation("catR")
        cat.velocityX = -3
    }
    if(cat.x - mouse1.x < mouse1.width/2 - cat.width/2){
        mouse1.addAnimation("end", mouseImg3)
        mouse1.changeAnimation("end")

        cat.addAnimation("end", catImg4)
        cat.changeAnimation("end")
        cat.velocityX = 0;
    }
    drawSprites();
}



