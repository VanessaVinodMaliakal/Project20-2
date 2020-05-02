var wall;
var car;
var speed,weight;
var deformation;

function setup() {

  createCanvas(800,400);

wall= createSprite(750, 200, 20, 200);
wall.shapeColor="grey";

speed=random(55,90);
weight=random(400,1500);

 car=createSprite(50,200,20,20);
 car.velocityX=speed/10;
 car.shapeColor ="white";
}

function draw() {
 console.log(name);
 deformation=((0.5*weight*speed*speed)/22500);
console.log(deformation);
  Collide(wall,car)
  background("black");  
  drawSprites();

  
  
}

function Collide(obj1,obj2){
 if( obj1.x-obj2.x < obj1.width/2 + obj2.width/2) {
    obj2.velocityX=0*obj2.velocityX;
    if(deformation < 100){
      car.shapeColor="green";
    }//else
   // car.shapeColor="white";

    if(deformation > 99 && deformation <= 180){
        car.shapeColor="yellow"
    }//else
   // car.shapeColor="white";

        if(deformation > 180){
          car.shapeColor="red"
        }//else
    //car.shapeColor="white";

    
      }
 }
