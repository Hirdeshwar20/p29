class Ground {
    constructor ();
    var options = {
        isStatic: true
    }
    this.ground = Bodies.rectangle(450,390,900,20,options);
    world.add (world,this.ground);
}

display(){
    strokeweight(2);
    fill("black");
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,900,20);
    
}