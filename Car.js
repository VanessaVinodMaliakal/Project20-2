class Car {
constructor() { 
    var allInstances = []; 
    this.x=50;
    this.y=200;
    this.sprite=createSprite(this.x,this.y,20,20);
    this.sprite.velocityX=-2;
    this.sprite.Shapecolor ="white";
    }
}