var calculator={
   getDuration:function(velocity, deltaDistance){
    return deltaDistance/velocity;
   },
   getVelocity:function(deltaDistance,duration){
    return deltaDistance/duration;
   },
   getDeltaDistance:function(velocity,duration){
    return velocity*duration;
   },
   getVelocityFromTwoPoint(a,b,duration){
    return this.getVelocity(a-b,duration);
   }
};
 module.exports = calculator