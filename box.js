class Box {
constructor(x,y,width,height){

this.body = Bodies.rectangle(x,y,width,height,{restitution:0.5});
this.width = width;
this.height = height;
World.add(earth,this.body)
}

display(){
var pos = this.body.position
push()
translate(pos.x,pos.y)
 rotate(this.body.angle)
 rectMode(CENTER)
 rect(0,0,this.width,this.height)
pop()
}


}