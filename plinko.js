class Plinko{

    constructor(x,y,radius){

        var options={
            
           
            isStatic:true
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.r=radius;
        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(RADIUS);
        fill("255");
        ellipse(0,0,this.r);
        pop();

       
    }
}