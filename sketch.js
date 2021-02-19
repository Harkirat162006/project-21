var bullet,wall,thickness ;

var speed,weight ;

function setup() {
createCanvas(1000,400);

 thickness=random(22,83);

 bullet = createSprite(50, 200, 60, 10);

 wall = createSprite(900,200,thickness,120)

  speed = Math.random (700,1000);
  weight = Math.random (30,52);

  bullet.velocityX = speed ;
}

function draw() {
  background("black");  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
     bullet.velocityX=0;
     var deformation=0.5 * weight * speed * speed/22509;



     if(deformation>180)
     {
       bullet.shapeColor="white";
      
     }
     if(deformation<180 && deformation>100)
     {
      bullet.shapeColor="white";
     
     }
     if(deformation<100)
     {
      bullet.shapeColor="white";
     
     }

  }

      if(hasCollided(bullet,wall))
      {
        bullet.velocityX=0;
        var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

        if(damage>10);
        {
          wall.shapeColour="red";
        }
        if(damage<10);
        {
          wall.shapeColor="green";
        }

      }
  drawSprites();
}

function hasCollided (lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}