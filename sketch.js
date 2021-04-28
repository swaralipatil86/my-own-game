var bg,bgImage;
var mom,mom_Image,girl,girl_image;
var mobile,mobileImg,laptop,laptopImg,headsets,headsetsImg,drone,droneImg,Ipad,IpadImg




function preload(){
//mom_Image = loadImage("game mom");
girl_image = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
bgImage = loadImage("city image game.jpg");
IpadImg = loadImage("ipad.png");
droneImg = loadImage("drone.png");
mobileImg = loadImage("mobile.png");
laptopImg = loadImage("laptop.png");
headsetsImg = loadImage("headsets.png");


   
}

function setup() {
    createCanvas(800, 800);
    bg = createSprite(200,400,20,20)
    bg.addImage("bg",bgImage);
    bg.velocityX = -2
    bg.scale = 3
    girl = createSprite(50,650,20,20)
   girl.addAnimation("girl",girl_image)


   
}
  function draw() {
    background(50,50,50);
     if(keyDown(LEFT_ARROW)){
          girl.x = girl.x-5
    }
    if(keyDown(RIGHT_ARROW)){
        girl.x = girl.x+5
    }

    if(keyDown(UP_ARROW)){
        girl.y = girl.y+5
    }
    if (bg.x < 0){
        bg.x = bg.width/2;
      }

  
    
    //player.x=camera.position.x;
    //player.y=camera.position.y;
    camera.position.x =girl.x 

    drawSprites();
}