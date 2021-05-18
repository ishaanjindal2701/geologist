class Box{
    constructor(x,y,width,height){
        var options={
        isStatic: false,
        'density':4,
        'friction': 1.0,
        'restitution':0.5
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);    
}
display(){
    var pos = this.body.position;

    rectMode(CENTER)
    rect(pos.x, pos.y, this.width, this.height);

}
  
}