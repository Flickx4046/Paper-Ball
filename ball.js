class Ball{
    constructor(x,y,parameter){
        var ball_options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,ball_options)
        this.radius = parameter
        World.add (world,this.body)
    }
    display(){
        fill("white")
        ellipseMode(RADIUS)
        ellipse(this.position.x,this.position.y,0,0)
    }
}