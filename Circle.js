class Circle{
    constructor(x,y,radius){
        var options={
        isStatic: false,
        'density':4,
        'friction': 1.0,
        'restitution':0.5
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius+60
   
    World.add(world,this.body);    
}
display(){
    var pos = this.body.position;

    ellipseMode(CENTER)
    ellipse(pos.x, pos.y, this.radius,this.radius);

}
  
}