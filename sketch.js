var boy, boyImage;
var man, manImage;
var girl, girlImage;
var hero, heroImage;
var sky, skyImage;
var civiliansGroup;


function preload(){
  boyImage = loadImage("Boy-Falling.png");
  girlImage = loadImage("Girl-Falling.png");
   manImage = loadImage("Man-Falling.png");
     heroImage = loadImage("Superhero.png");
skyImage = loadImage("Sky-Image.jpg");
}

function setup() {
  createCanvas(500,500);
  background(0);
 sky = createSprite(250,250,500,500);
sky.addImage("sky", skyImage);
sky.velocityY = 5;
sky.scale = 2.2;

civiliansGroup = new Group();


hero  = createSprite(245,250,50,50);
hero.addImage("hero", heroImage);
hero.scale = 0.2;
}

function draw() {
  if(sky.y > height ){
    sky.y = height/2;


  }


spawnCivilians();
hero.x = World.mouseX;
 drawSprites();
}

function spawnCivilians(){
if(frameCount % 100 === 0){
 boy = createSprite(250, -50,60,60);
 boy.addImage("boy", boyImage);
 boy.scale = 0.1;
 boy.velocityY = 5;
 if(frameCount % 150 === 0){
 girl = createSprite (200 -50, 60, 60);
 girl.addImage("girl", girlImage);
 girl.scale = 0.1;
 girl.velocityY = 5;
 if(frameCount % 75 === 0){
man = createSprite (400, -50, 60,60);
man.addImage("man", manImage);
 man.scale = 0.1;
 man.velocityY = 5;
boy.x = Math.round(random(50,480));
girl.x = Math.round(random(75, 400));
man.x = Math.round(random(100, 450));

civiliansGroup.add(boy);
civiliansGroup.add(girl);
civiliansGroup.add(man);

man.lifetime = 500;
boy.lifetime = 500;
girl.lifetime = 500;

if(hero.isTouching()){
 civiliansGroup.destroyEach();
}

 }
}
}
}
