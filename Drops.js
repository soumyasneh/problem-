class Drops {
    constructor(x, y) {

        var options ={
            restitution:0,
            friction:0.4
        }
        //this.r=r;
      
        this.body = Bodies.circle(x, y, 5,options);       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("rgb(75,0,130)");
        ellipseMode(RADIUS);
        ellipse(0, 0, 5,5);
        pop();
    }

};