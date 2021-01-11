
var fixed, moving;
var obj1, obj2, obj3;



function setup() {
  createCanvas(800,400);
  

 fixed = createSprite(250, 200, 50, 80);
 moving = createSprite(400, 200, 80, 50);
 obj1 = createSprite(30, 200,50, 50);
 obj2 = createSprite(450, 20, 50, 50);
obj3 = createSprite(450, 380, 50, 50);
obj2.velocityY = 6
obj3.velocityY = -6
}
function draw() {
  background(255,255,255); 
  moving.y = World.mouseY;
  moving.x = World.mouseX;
  if(isTouching(moving, obj1))
  {
  moving.shapeColor = "yellow";
  obj1.shapeColor = "red";
  }
  else{
    obj1.shapeColor = "yellow";
 moving.shapeColor = "red";
  }
  bounceOff(obj2, obj3);
  drawSprites();
}
  function isTouching(a, b)
  { 
    if(a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < a.width/2 +  b.width/2  &&
     b.y - a.y < a.height/2 + b.height/2 && a.y - b.y < a.height/2 + b.height/2)
   {
     return true;
  }
  else{
  return false
  }
  
}
function bounceOff(a, b){
if ( a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < a.width/2 +  b.width/2)
{
  a.velocityX = a.velocityX * (-1)
  b.velocityX = b.velocityX * (-1)
  a.shapeColor = "red";
 b.shapeColor = "red";
}
if( b.y - a.y < a.height/2 + b.height/2 && a.y - b.y < a.height/2 + b.height/2){
  a.velocityY = a.velocityY * (-1)
b.velocityY = b.velocityY * (-1)
a.shapeColor = "yellow";
 b.shapeColor = "yellow";

}
}