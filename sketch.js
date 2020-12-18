var tank1; 
var tank1Img;
var wallImg;
var gameState="PLAY";
var i 


function preload(){

tank1Img=loadImage("tank1.png");
bgImg=loadImage("SPAVCE.jpg");

}

function setup() {
  createCanvas(1350,700);
  edges = createEdgeSprites();

  i=
  WallGroup = createGroup();

  tank1=createSprite(30,310,20,20);
  tank1.addImage(tank1Img);
  tank1.scale=0.5;
  wall1 = createSprite(82,0,20,200);
  wall1.shapeColor="brown"
  wall2 = createSprite(0,151,90,20);
  wall2.shapeColor="brown"
  wall3 = createSprite(120,50,90,20);
  wall3.shapeColor="brown"
  wall4 = createSprite(160,55,20,60);
  wall4.shapeColor="brown"
  wall5 = createSprite(185,83,70,20);
  wall5.shapeColor="brown"
  wall6 = createSprite(278,0,20,300);
  wall6.shapeColor="brown"
  wall7 = createSprite(35,161,20,90);
  wall7.shapeColor="brown"
  wall8 = createSprite(70,215,90,20);
  wall8.shapeColor="brown"
  wall9 = createSprite(110,180,20,90);
  wall9.shapeColor="brown"
  wall10 = createSprite(190,280,90,20);
  wall10.shapeColor="brown"
  wall11 = createSprite(0,408,200,20);
  wall11.shapeColor="brown"
  wall12 = createSprite(151,416,20,70);
  wall12.shapeColor="brown"
  wall13 = createSprite(100,418,20,90);
  wall13.shapeColor="brown"
  wall14 = createSprite(160,460,200,20);
  wall14.shapeColor="brown"
  wall16 = createSprite(0,630,160,20);
  wall16.shapeColor="brown"
  wall17 = createSprite(286,150,150,20);
  wall17.shapeColor="brown"
  wall18 = createSprite(524,0,20,550);
  wall18.shapeColor="brown"
  wall19 = createSprite(353,167,20,50);
  wall19.shapeColor="brown"
  wall20 = createSprite(437,370,90,20);
  wall20.shapeColor="brown"
  wall21 = createSprite(560,121,90,20);
  wall21.shapeColor="brown"
  wall22 = createSprite(820,300,20,450);
  wall22.shapeColor="brown"
  wall23 = createSprite(767,290,90,20);
  wall23.shapeColor="brown"
  wall24 = createSprite(895,0,20,200);
  wall24.shapeColor="brown"
  wall27 = createSprite(1207,0,20,250);
  wall27.shapeColor="brown"
  wall28 = createSprite(1227,133,60,20);
  wall28.shapeColor="brown"
  wall29 = createSprite(605,450,20,400);
  wall29.shapeColor="brown"
  wall30 = createSprite(1256,0,20,70);
  wall30.shapeColor="brown"
  wall31 = createSprite(1246,503,20,250);
  wall31.shapeColor="brown"
  wall32 = createSprite(817,627,20,90);
  wall32.shapeColor="brown"
  wall33 = createSprite(1247,270,20,90);
  wall33.shapeColor="brown"
  wall34 = createSprite(2016,520,90,20);
  wall34.shapeColor="brown"
  wall35 = createSprite(920,550,90,20);
  wall35.shapeColor="brown"
  wall37 = createSprite(920,170,90,20);
  wall37.shapeColor="brown"
  winWall1=createSprite(1300,305,120,20);
  winWall1.shapeColor="brown"
  winWall2=createSprite(1295.9,380,120,20);
  winWall2.shapeColor="brown"
  winWall3=createSprite(1350,340,20,90);
  winWall3.shapeColor="lightblue"


}

function draw() {
  background(bgImg);

wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();
wall7.display();
wall8.display();
wall9.display();
wall10.display();
wall11.display();
wall12.display();
wall13.display();
wall14.display();

wall16.display();
wall17.display();
wall18.display();
wall19.display();
wall20.display();
wall21.display();
wall22.display();
wall23.display();
wall24.display();


wall27.display();
wall28.display();
wall29.display();
wall30.display();
wall31.display();
wall32.display();
wall33.display();
wall34.display();
wall35.display();

wall37.display();

  tank1.display();


  if(gameState==="PLAY"){

    textSize(30);
    stroke("white")
    fill("white")

    text("Use Arrow Keys To Move",250,315)
    
    
    textSize(30);
    stroke("white")
    fill("white")
    text("Reach The Blue Strip To Win ------->",845,355)
    
    if(tank1.isTouching(wall1)||tank1.isTouching(wall2) || tank1.isTouching(wall3) || tank1.isTouching(wall4)|| tank1.isTouching(wall5)|| tank1.isTouching(wall6)|| tank1.isTouching(wall7)|| tank1.isTouching(wall8)|| tank1.isTouching(wall9)|| tank1.isTouching(wall10)){

      tank1.x=30
      tank1.y=310
  }
  if(tank1.isTouching(wall11)||tank1.isTouching(wall12) || tank1.isTouching(wall13) || tank1.isTouching(wall14)|| tank1.isTouching(wall16)|| tank1.isTouching(wall17)|| tank1.isTouching(wall18)|| tank1.isTouching(wall19)|| tank1.isTouching(wall20)){
  
    tank1.x=30
    tank1.y=310
  }
  if(tank1.isTouching(wall21)||tank1.isTouching(wall22) || tank1.isTouching(wall23) || tank1.isTouching(wall24)||  tank1.isTouching(wall27)|| tank1.isTouching(wall28)|| tank1.isTouching(wall9)|| tank1.isTouching(wall30)){
  
    tank1.x=30
    tank1.y=310
  }
  if(tank1.isTouching(wall31)||tank1.isTouching(wall32) || tank1.isTouching(wall33) || tank1.isTouching(wall34)|| tank1.isTouching(wall35)|| tank1.isTouching(wall37) || tank1.isTouching(winWall1) || tank1.isTouching(winWall2) || tank1.isTouching(edges) ){
  
    tank1.x=30
    tank1.y=310
  }



  if(tank1.isTouching(winWall3)){
    textSize(50);
    stroke("white")
    fill("white")
  text("You Win Thanks For Playing",255,460);

  gameState="END";
  }

  if(keyDown("UP_ARROW")){
    tank1.y = tank1.y-5;
  }
  if(keyDown("DOWN_ARROW")){
    tank1.y = tank1.y+5;
  }
  if(keyDown("LEFT_ARROW")){
    tank1.x = tank1.x-5;
  }
  if(keyDown("RIGHT_ARROW")){
    tank1.x = tank1.x+5;
  }

}

if(gameState==="END"){


  background(0,0,0);
  stroke("yellow");
  fill("yellow");
  textSize(40);

  text("Game Over,You Win",480,320)

  wall1.destroy();
  wall2.destroy();
  wall3.destroy();
  wall4.destroy();
  wall5.destroy();
  wall6.destroy();
  wall7.destroy();
  wall8.destroy();
  wall9.destroy();
  wall10.destroy();
  wall11.destroy();
  wall12.destroy();
  wall13.destroy();
  wall14.destroy();
  wall15.destroy();
  wall16.destroy();
  wall17.destroy();
  wall18.destroy();
  wall19.destroy();
  wall20.destroy();
  wall21.destroy();
  wall22.destroy();
  wall23.destroy();
  wall24.destroy();
  wall25.destroy();
  wall26.destroy();
  wall27.destroy();
  wall28.destroy();
  wall29.destroy();
  wall30.destroy();
  wall31.destroy();
  wall32.destroy();
  wall33.destroy();
  wall34.destroy();
  wall35.destroy();
  wall37.destroy();
}

  drawSprites();

 
  fill("white")
  stroke("white")
  textSize(50);
  
  text(mouseX + "," + mouseY,30,30);
}


    

