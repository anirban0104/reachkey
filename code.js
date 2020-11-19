var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["417fc34a-ad1b-4dfd-86b2-a2e14dfead98","e4765ac4-0798-4959-b182-eb8ff060a178","8122a14b-4f3d-4b52-a237-85077a683843","8a9330b5-9863-4540-9e05-ea22cf82227e","e7e945c5-9c55-4bb1-9daf-bf80abf3a803","e99b93a1-736f-459e-9b7e-237083cf11da","82631241-b3d2-4ffc-a185-d5f5a54834cf","9277d44c-109f-428d-9eb7-eaff413960c0","f593c5e0-cc92-4700-8fa0-c6d4c2b83924","187a94a8-3820-482c-9328-1ef02807a7d0","2e38144e-ac7c-48f8-ba99-354cea1c56ed","b8c7a46c-d543-462c-a2e0-aa7b5cd63f3e","d4092095-69c0-43a1-9720-9b37fd0afcf4"],"propsByKey":{"417fc34a-ad1b-4dfd-86b2-a2e14dfead98":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"oJA_StLAuFjArBvI70IttdAWhnlMl8Wo","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png"},"e4765ac4-0798-4959-b182-eb8ff060a178":{"name":"key","sourceUrl":null,"frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"_VVagMDf_HwFaSaUUPWvR5ErEoqL.cjM","categories":["generic_items"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/e4765ac4-0798-4959-b182-eb8ff060a178.png"},"8122a14b-4f3d-4b52-a237-85077a683843":{"name":"key2","sourceUrl":null,"frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"eSjt.H4b8QXN9Z22.fn8oMIK.05tHzFf","categories":["generic_items"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/8122a14b-4f3d-4b52-a237-85077a683843.png"},"8a9330b5-9863-4540-9e05-ea22cf82227e":{"name":"key3","sourceUrl":null,"frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"r_xBouXloxm.zIiE5rCNeyky54JeBY4.","categories":["generic_items"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/8a9330b5-9863-4540-9e05-ea22cf82227e.png"},"e7e945c5-9c55-4bb1-9daf-bf80abf3a803":{"name":"santa","sourceUrl":"assets/api/v1/animation-library/gamelab/GeDUtGGrRf0BnCzfSwNnqTCYyJzrECcN/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GeDUtGGrRf0BnCzfSwNnqTCYyJzrECcN","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GeDUtGGrRf0BnCzfSwNnqTCYyJzrECcN/category_backgrounds/background_santa.png"},"e99b93a1-736f-459e-9b7e-237083cf11da":{"name":"you win","sourceUrl":"assets/v3/animations/iqjtj_TQvzGeQXmE7MpSSVGjec5w0WPyBNFnZKuFdCg/e99b93a1-736f-459e-9b7e-237083cf11da.png","frameSize":{"x":300,"y":168},"frameCount":1,"looping":true,"frameDelay":4,"version":"iqFAWUjxNdTJrnEBhE_ncwz2Nt_qqxFH","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":168},"rootRelativePath":"assets/v3/animations/iqjtj_TQvzGeQXmE7MpSSVGjec5w0WPyBNFnZKuFdCg/e99b93a1-736f-459e-9b7e-237083cf11da.png"},"82631241-b3d2-4ffc-a185-d5f5a54834cf":{"name":"imposter","sourceUrl":null,"frameSize":{"x":68,"y":87},"frameCount":2,"looping":true,"frameDelay":12,"version":"U60jurArnbU9icX9E0DcIqa.LylzoMmd","loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":87},"rootRelativePath":"assets/82631241-b3d2-4ffc-a185-d5f5a54834cf.png"},"9277d44c-109f-428d-9eb7-eaff413960c0":{"name":"imposter2","sourceUrl":null,"frameSize":{"x":68,"y":87},"frameCount":2,"looping":true,"frameDelay":12,"version":"AmrfIlWyN7fz90HVn5fAhvVmQl5KMnFi","loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":87},"rootRelativePath":"assets/9277d44c-109f-428d-9eb7-eaff413960c0.png"},"f593c5e0-cc92-4700-8fa0-c6d4c2b83924":{"name":"static","sourceUrl":null,"frameSize":{"x":68,"y":88},"frameCount":1,"looping":true,"frameDelay":12,"version":"Z8g5r22En0XG1r.1snz.DPNcranEIpx4","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":88},"rootRelativePath":"assets/f593c5e0-cc92-4700-8fa0-c6d4c2b83924.png"},"187a94a8-3820-482c-9328-1ef02807a7d0":{"name":"staticL","sourceUrl":null,"frameSize":{"x":68,"y":88},"frameCount":1,"looping":true,"frameDelay":12,"version":"RTCTn5.S.psYLQ6FrSzMPd9QVFtUOefo","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":88},"rootRelativePath":"assets/187a94a8-3820-482c-9328-1ef02807a7d0.png"},"2e38144e-ac7c-48f8-ba99-354cea1c56ed":{"name":"trophy","sourceUrl":null,"frameSize":{"x":190,"y":286},"frameCount":1,"looping":true,"frameDelay":12,"version":"Vfiz.91pyv5Ro0UuNSzfKmvR.9KyUPUd","loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":286},"rootRelativePath":"assets/2e38144e-ac7c-48f8-ba99-354cea1c56ed.png"},"b8c7a46c-d543-462c-a2e0-aa7b5cd63f3e":{"name":"life","sourceUrl":"assets/v3/animations/eyjqTgmi74LEipasiL2XNCZuJQjDhdjPgjSB5GG3Kvk/b8c7a46c-d543-462c-a2e0-aa7b5cd63f3e.png","frameSize":{"x":505,"y":494},"frameCount":1,"looping":true,"frameDelay":4,"version":"MvzLPblyi6ANY5ss0tRCTmnpwlJWuJb_","loadedFromSource":true,"saved":true,"sourceSize":{"x":505,"y":494},"rootRelativePath":"assets/v3/animations/eyjqTgmi74LEipasiL2XNCZuJQjDhdjPgjSB5GG3Kvk/b8c7a46c-d543-462c-a2e0-aa7b5cd63f3e.png"},"d4092095-69c0-43a1-9720-9b37fd0afcf4":{"name":"go","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":2,"looping":true,"frameDelay":12,"version":"rUwq1q8g.GGy8mNbHKFr8HDkwhw.fxk6","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":450},"rootRelativePath":"assets/d4092095-69c0-43a1-9720-9b37fd0afcf4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Creating background by making it a variable
  var bg= createSprite(200,200,400,400)
bg.setAnimation("santa")
 // bg.shapeColor="white"
  playSound("assets/category_loops/show_me_a_hero_middle_loop.mp3",true)

//Creating the player

  var player= createSprite(44,100,5,5)
  player.setAnimation("static")
  player.scale= 0.4

//creating the sectors


var wall1= createSprite(200,100,400,10);
wall1.shapeColor= "red";
var wall2= createSprite(200,200,400,10);
wall2.shapeColor= "red";
var wall3= createSprite(200,300,400,10);
wall3.shapeColor= "red";

//creating obstacles for line1


var obs= createSprite(100,25,10,60);
obs.shapeColor= "yellow";
var obs2= createSprite(200,65,10,60);
obs2.shapeColor= "yellow";
var obs3= createSprite(298,20,10,80);
obs3.shapeColor= "yellow";
var share= createSprite(150,50,10,10);
share.shapeColor= "orange";
share.velocityX= 3;
var share2= createSprite(325,50,10,10);
share2.shapeColor= "orange";
share2.velocityY= 3;
var key2= createSprite(370,20,10,10);
key2.setAnimation("key2");
key2.scale= 0.4;



//creating balls and a key for line2
var ball1= createSprite(50,145,10,10);
ball1.shapeColor= "orange";
ball1.velocityY= 3;
var ball2= createSprite(150,150,10,10);
ball2.shapeColor= "orange";
ball2.velocityY= 4;
var ball3= createSprite(250,150,10,10);
ball3.shapeColor= "orange";
ball3.velocityY= 3;
var ball4= createSprite(350,150,10,10);
ball4.shapeColor= "orange";
ball4.velocityY= 4;
var key1= createSprite(17,135,10,10);
key1.setAnimation("key");
key1.scale= 0.5;

//creating obstacles for line3

var rex= createSprite(125,250,10,40);
rex.shapeColor= "yellow";
rex.velocityY= 2;
var rex2= createSprite(230,250,10,40);
rex2.shapeColor= "yellow";
rex2.velocityY= 2;
var rex3= createSprite(300,250,10,40);
rex3.shapeColor= "yellow";
rex3.velocityY= 2;
var rex4= createSprite(45,250,10,40);
rex4.shapeColor= "yellow";
rex4.velocityY= 2;
var rex5= createSprite(178,250,10,40);
rex5.shapeColor= "yellow";
rex5.velocityY= 2;
var key3= createSprite(380,235,10,10);
key3.setAnimation("key3");
key3.scale= 0.5;

//creating obstacles for line4

var b1= createSprite(50,350,10,30);
b1.shapeColor= "white";
b1.velocityY= 2;
var b2= createSprite(200,350,10,30);
b2.shapeColor= "white";
b2.velocityY= 2;
var b3= createSprite(350,350,10,30);
b3.shapeColor= "white";
b3.velocityY= 2;
var b4= createSprite(200,335,80,10);
b4.shapeColor= "white";
b4.velocityX= 4;
var b5= createSprite(200,355,80,10);
b5.shapeColor= "white";
b5.velocityX= -4;

//creating the end for the game

var end= createSprite(20,380,30,30);
end.setAnimation("trophy")
end.shapeColor= "yellow";
end.scale=0.2

//adding an animation if player wins the game


var wow= createSprite(200,200);
wow.setAnimation("you win");
wow.scale=2.5
wow.visible= false;



 var go = createSprite(200,200,1,1)
 go.setAnimation("go")
 go.visible=false
 go.scale=2
 
 
 
var life = createSprite(13,10,10,10)
life.setAnimation("life")
life.scale=0.05


var life2 = createSprite(34,10,10,10)
life2.setAnimation("life")
life2.scale=0.05

var life3 = createSprite(56,10,10,10)
life3.setAnimation("life")
life3.scale=0.05






   shapeColor="red"
  var Score = 0
   //Score = Score + 1 + Score
 textSize(15)
 



    
function draw() {
  

  background("white")
 text(Score,171,18)

    
    //creating the edges
    createEdgeSprites();
      
    //colliding the player with the walls and edges
    
    player.collide(edges);
    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    
    //bouncing off the ball of line 2 from the walls
    
    ball1.bounceOff(wall1);
    ball1.bounceOff(wall2);
    ball2.bounceOff(wall1);
    ball2.bounceOff(wall2);
    ball3.bounceOff(wall1);
    ball3.bounceOff(wall2);
    ball4.bounceOff(wall1);
    ball4.bounceOff(wall2);
    
    //bouncing off small squares of line 1 from respective targets
    share.bounceOff(obs);
    share.bounceOff(obs2);
    share2.bounceOff(topEdge);
    share2.bounceOff(wall1);
    
    //bouncing off all rex of line 3 from the walls 2 and 3
    rex.bounceOff(wall2);
    rex.bounceOff(wall3);
    rex2.bounceOff(wall2);
    rex2.bounceOff(wall3);
    rex3.bounceOff(wall2);
    rex3.bounceOff(wall3);
    rex4.bounceOff(wall2);
    rex4.bounceOff(wall3);
    rex5.bounceOff(wall2);
    rex5.bounceOff(wall3);
    
    //bouncing off obstacles of line 4 from respective targets
    b1.bounceOff(wall3);
    b1.bounceOff(bottomEdge);
    b2.bounceOff(wall3);
    b2.bounceOff(bottomEdge);
    b3.bounceOff(wall3);
    b3.bounceOff(bottomEdge);
    b4.bounceOff(edges);
    b5.bounceOff(edges);
    
    
   
    
    //setting player's velocity to 0
    player.setVelocity(0,0);
    
    //if right arrow key is pressed move the player to right side
    if(keyDown("RIGHT_ARROW")){
      player.setAnimation("imposter")
      player.velocityX= 3;
    }
    
  
    //if left arrow key is pressed move the player to left side
    if (keyDown(LEFT_ARROW)) {
      player.setAnimation("imposter2")
      player.velocityX= -3;
    }
   
    
    //if up arrow key is pressed move the player upwards
    if (keyDown(UP_ARROW)) {
      player.velocityY= -3;
    }
    
    //if down arrow key is pressed move the player downwards
    if (keyDown(DOWN_ARROW)) {
      player.velocityY= 3;
    }
    
    //if player touches any obstacle, it will come back to its starting position
    //and all keys will be visible
    if (player.isTouching(obs)||
    player.isTouching(obs2)||
    player.isTouching(obs3)||
    player.isTouching(share)||
    player.isTouching(share2)||
    player.isTouching(ball1)||
    player.isTouching(ball2)||
    player.isTouching(ball3)||
    player.isTouching(ball4)||
    player.isTouching(rex)||
    player.isTouching(rex2)||
    player.isTouching(rex3)||
    player.isTouching(rex4)||
    player.isTouching(rex5)||
    player.isTouching(b1)||
    player.isTouching(b2)||
    player.isTouching(b3)||
    player.isTouching(b4)||
    player.isTouching(b5))
    {
      
      
      
      Score = Score +1
          
      //life.visible=true
      //go.visible=true
      
    
      
      playSound("assets/category_alerts/vibrant_game_negative_affirmation.mp3")
      player.x= 44;
      player.y= 100;
      key2.visible= true;
      key1.visible= true;
      key3.visible= true;
    }
    
    //if player touches 2nd key make it invisible and change the cordinates 
    //of the player
    if (player.isTouching(key2)) {
  
      playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3")
      player.x= 378;
      player.y= 194;
      key2.visible= false;
    }
    
    //if player touches 1st key make it invisible and change the cordinates  
    //of the player
    if (player.isTouching(key1)) {
      playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3")
      player.x= 20;
      player.y= 250;
      key1.visible= false;
    }
    
    //if player touches 3rd key make it invisible and change the cordinates  
    //of the player
    if (player.isTouching(key3)) {
      playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3")
      player.x= 380;
      player.y= 390;
      key3.visible= false;
      
      
      
    }
   
    
   if(Score===1) {
     life3.visible=false
   }
    
    if(Score===2){
      life2.visible=false
    }
    
    if(Score===3){
      life.visible=false
      stopSound()
      
      go.visible=true
    }
    
   
    //if player touches the end make the wow animation visible 
    if (player.isTouching(end)) {
      wow.visible= true;
      player.visible=false
      stopSound()
      
      
      if (player.isTouching(end)) {
   playSound("assets/category_achievements/peaceful_win_8.mp3",false);
}
     
    }
  if (keyDown("r")) {
      go.visible=false
      life.visible=true
      life2.visible=true
      life3.visible=true
      Score=0
      playSound("assets/category_loops/show_me_a_hero_middle_loop.mp3")
     
    }
      
    
   

    
    drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
