class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            atifness:0.04,
            length:20
        }
        this.pointB = pointB
        this.sling = constraint.create(options);
        world.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeweight(4);
            FileList("red");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}