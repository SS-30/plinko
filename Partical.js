class Partical{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          Restitution:0.5,
          density:0.5,
          friction:1
      }
        this.body=Bodies.circle(x,y,rthis.adius,options)
        this.color=color(random(0,255)) ,random((0,255)) ,random((0,255))
        World.add(world,this.body)
      
    }

    display(){
      push()
      var pos = this.body.position
      elipseMode(CENTER)
      elipse(pos.x,pos.y,this.radius)
      pop()
    }
}