class Chain{
  constructor(bodyA,bodyB){
     var option = {
         bodyA:bodyA,
         bodyB:bodyB,
         stiffness:0.6,
        length:166,
     } 
     this.chain=Constraint.create(option)
     World.add(world,this.chain);
     console.log(this.chain)
  } 
  display(){
      push()
      stroke("red")
      strokeWeight(16)
      line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
      pop()
  } 
}