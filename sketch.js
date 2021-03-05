var bullet,target;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);

  speed=round(random(223,321));
  weight=round(random(30,52));
  bullet= createSprite(200, 200, 80, 20);
  bullet.velocityX=speed;

  thickness=round(random(22,83));
  target= createSprite(1200, 200, thickness*2, height/2);
  target.shapeColor="White";

  //box=createSprite(300,300,50,50);
  console.log("Speed: "+speed);
  console.log("Weight: "+weight);
  console.log("Thickness: "+thickness);
  //alert("The FrameRate has been decreased for you to see the Bullet the Peircing the Wall");
}

function draw() {
  background(0);  

  if(isTouching(bullet,target))
  {
    bullet.velocityX=0;
    if(((0.5*speed*speed*weight)/(thickness*thickness*thickness))>=10)
    {
      target.shapeColor="red";
    }
    else{
      target.shapeColor="green";
    }
  }
  drawSprites();
}

function isTouching(bullet,wall)
{
  if((bullet.x+bullet.width)>=wall.x)
    {
      return true;
    }
  else{
    return false;
  }
}