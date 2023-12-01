
cc.Class({
    extends: cc.Component,

    properties: {
        lampList: [cc.Node],
        lampIndex: 0,
        countDown: 3,
        countDownTxt: cc.Label,
        chicken: cc.Node,
        car: cc.Node,
        timeElapsed: 0,
        lampDelay: 1.6,
        countdownInterval: 1,
        isLightOn: false,
        starWalk:false
    },
    onLoad() {

    },
    start() {
        this.timeElapsed = 0;
    },
    update(dt) {
        if (!this.isLightOn) {
            this.timeElapsed += dt;
            if (this.timeElapsed < this.lampDelay) {
                if(this.timeElapsed<=dt){
                    if (this.lampIndex <2) {
                        console.log(this.lampList[this.lampIndex]);
                        this.lampList[this.lampIndex].getComponent("Lamp").startLight();
                    }
                }
            }
            else{
                this.lampIndex++;
                this.timeElapsed = 0;
                if(this.lampIndex==2){
                    this.isLightOn=true;
                }
            }
        } else {
            this.lampList[2].getComponent("Lamp").node.color = this.lampList[this.lampIndex].getComponent("Lamp").lampColor;
            this.timeElapsed += dt;
            if (this.timeElapsed >= this.countdownInterval) {
                this.timeElapsed = 0;
                if (this.countDown > 0) {
                    console.log(this.countDown);
                    this.countDownTxt.string = this.countDown.toString();
                    this.countDown--;
                } else {
                    if(!this.starWalk){
                        this.countDownTxt.string = "";
                        this.chicken.getComponent("Chicken").move();
                        this.car.getComponent("Car").move();
                        this.starWalk=true;
                    }
                    this.isLightOn = false;
                }
            }
        }
    },

    countDownNumber() {
        this.countDownTxt.string = this.countDown.toString();
    }
});
