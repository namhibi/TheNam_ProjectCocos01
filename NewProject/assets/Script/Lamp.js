
cc.Class({
    extends: cc.Component,
    properties: {
        lampColor: cc.Color,
        defaultColor: cc.Color,
        count: 0,
        timerFlash: 0,
        timer: 0,
        isStart:false,
        isFlashing:false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.color = this.defaultColor;
    },

    start() {

    },

    update(dt) { 
       if(this.isStart){
        if(!this.isFlashing){
            this.timer+=dt;
            if( this.timer>1){
                this.isFlashing = true;
            }
        }else{
            this.timerFlash+=dt;
            if(this.timerFlash>=0.1){
                this.node.color = this.defaultColor;
            }
            if(this.timerFlash>=0.2){
                this.node.color = this.lampColor;
                this.count++;
                this.timerFlash=0;
            }
            if(this.count==3){
                this.node.color = this.defaultColor;
                this.isStart = false;
            }
        }
       }
    },
    startLight() {
        this.node.color = this.lampColor;
        this.isStart = true;
    },
});
