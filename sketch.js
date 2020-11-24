var score = 0;
var player;
var bullet;
var enemyGroup, enemyGroup1, enemyGroup2, enemyGroup3, enemyGroup4;
var player_img, enemy_img, Background_img, bullet_img, enemy_img1, enemyA,  enemyB, enemyC, enemyD, enemyS;

function preload(){
  player_img = loadImage("fighter.jpg");
  enemy_img = loadImage("space.jpg");
  Background_img = loadImage("backgroud.jpg");
  bullet_img = loadImage("bullet.jpg");
  enemy_img1 = loadImage("special.jpg");
}

function setup() {
 createCanvas(1000,750);

 player = createSprite(500, 770,1, 1);
 bullet = createSprite(500, 770, 20, 50);

 enemyGroup = new Group();
 enemyGroup1 = new Group();
 enemyGroup2 = new Group();
 enemyGroup3 = new Group();
 enemyGroup4 = new Group();
}

function draw() {
  imageMode(RIGHT);
  background(Background_img);  

  imageMode(CENTER);
  image(player_img, player.x, player.y, 70, 100);
  imageMode(CENTER);
  image(bullet_img, bullet.x, bullet.y, 20, 60);
  imageMode(CENTER);
  image(enemy_img, enemyS.x, enemyS.y, 70, 100);
  imageMode(CENTER);
  image(enemy_img, enemyA.x, enemyA.y, 70, 100);
  imageMode(CENTER);
  image(enemy_img, enemyB.x, enemyB.y, 70, 100);
  imageMode(CENTER);
  image(enemy_img, enemyC.x, enemyC.y, 70, 100);
  imageMode(CENTER);
  image(enemy_img, enemyD.x, enemyD.y, 70, 100);

  if (keyWentDown("space")){
    bullet.y = mouseY;
    bullet.x = mouseX;
    bullet.velocityY = -30;
    }

    if(bullet.y === 0){
      bullet.y = mouseY;
      bullet.x = mouseX;
      bullet.velocityY = 0;
    }

    if(bullet.isTouching(enemyGroup)){
      enemyGroup.destroyEach();
      score = score + 8;
    }

    if(bullet.isTouching(enemyGroup1)){
      enemyGroup1.destroyEach();
      score = score + 4;
    }

    if(bullet.isTouching(enemyGroup2)){
      enemyGroup2.destroyEach();
      score = score + 4;
    }

    if(bullet.isTouching(enemyGroup3)){
      enemyGroup3.destroyEach();
      score = score + 4;
    }

    if(bullet.isTouching(enemyGroup4)){
      enemyGroup4.destroyEach();
      score = score + 4;
    }

    if(enemyGroup.isTouching(player)){
      textSize(30);
      text("GAME OVER", 500, 375);
      enemyGroup.destroyEach();
      enemyGroup1.destroyEach();
      enemyGroup2.destroyEach();
      enemyGroup3.destroyEach();
      enemyGroup4.destroyEach();
      bullet.velocityY = 0;
      bullet.visible = false;
      player.visible = false;
      score = 0;
    }

    player.x = mouseX;
    player.y = mouseY;

    spawnEnemy1();
    spawnEnemy2();
    spawnEnemy3();
    spawnEnemy4();
    spawnEnemy5();

  drawSprites();
  textSize(20);
  text("PLAYER SCORE: "+ score, 50, 50);
}

function spawnEnemy1(){
  if(World.frameCount%67===0){
    
     var enemyS = createSprite(100, 100, 20, 20);
     enemyS.velocityY = random(10, 15);
     enemyS.x = random(50, 950);
     enemyS.y = 50;
  
     enemyGroup.add(enemyS);
      }
    }

    function spawnEnemy2(){
      if(World.frameCount%70===0){

 enemyA = createSprite(100, 100, 20, 20);
     enemyA.velocityY = random(10, 15);
     enemyA.x = random(250, 750);
     enemyA.y = 50;
 
     enemyGroup1.add(enemyA);
      }
    }

    function spawnEnemy3(){
      if(World.frameCount%65===0){

      enemyB = createSprite(100, 100, 20, 20);
        enemyB.velocityY = random(10, 15);
        enemyB.x = random(150, 650);
        enemyB.y = 50;
     
        enemyGroup2.add(enemyB);
      }
    }
   
    function spawnEnemy4(){
      if(World.frameCount%75===0){

      enemyC = createSprite(100, 100, 20, 20);
        enemyC.velocityY = random(10, 15);
        enemyC.x = random(300, 800);
        enemyC.y = 50;
       
        enemyGroup3.add(enemyC);
      }
    }

    function spawnEnemy5(){
      if(World.frameCount%73===0){

     enemyD = createSprite(100, 100, 20, 20);
        enemyD.velocityY = random(10, 15);
        enemyD.x = random(500, 900);
        enemyD.y = 50;
        
        enemyGroup4.add(enemyD);
      }
    }


