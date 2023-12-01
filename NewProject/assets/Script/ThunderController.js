
cc.Class({
    extends: cc.Component,

    properties: {
     Thunders:[cc.Node],
     timer:0,
     count:0,
     index:{
        default:0,
        serializable:false
     },
     isStar:{
        default:0,
        serializable:false
     },
     spriteCar:cc.Node,
     exlosion:cc.Node,
    },


    // onLoad () {},

    start () {
    },
    startThunder(){
        this.isStar=true;
    },
    update (dt) {
        if(this.isStar==true){
            this.timer+=dt
            if(this.timer>1){
                this.timer=0;
                
                this.Thunders[this.index].active=true;
                this.index++;
                if(this.index>this.Thunders.length-1){
                    console.log(this.index);
                    this.index=0;
                    this.isStar=false;
                    this.exlosion.active=false;
                }
                if(this.index>=3){
                    this.exlosion.active=true;
                    let colorValue=90-this.count*20;
                    this.spriteCar.color=cc.color(colorValue,colorValue,colorValue);
                    console.log(this.spriteCar.color);
                    this.count++;
                }
            }
        }
    },
});
