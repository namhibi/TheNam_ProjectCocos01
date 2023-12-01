
cc.Class({
    extends: cc.Component,

    properties: {
        pos: cc.Node,
        pos2: cc.Node,
        duration: 2,
        timer: 0,
        startAction: false,
        setValue: false,
        index: 0,
        actions: []
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.action = [this.moveCar];
    },

    start() {
    },
    move() {
        this.startAction = true;
    },
    update(dt) {
        if (this.startAction) {
            this.timer += dt;
            if (this.timer < this.duration) {
                this.action[this.index].call(this, dt);;
            } else {
                this.timer = 0,
                    this.setValue = false;
                this.index++;
                if (this.index > this.action.length - 1) this.startAction = false;
            }
        }
    },
    moveCar(dt) {
        if (!this.setValue) {
            this.duration = 2;
            this.distanceX = this.pos.position.x - this.node.position.x;
            this.distanceY = this.pos.position.y - this.node.position.y;
            this.speedX = this.distanceX / this.duration;
            this.speedY = this.distanceY / this.duration;
            this.setValue = true;
        } else {
            this.node.x += this.speedX * dt;
            this.node.y += this.speedY * dt;
        }
    },
    moveCar2(dt) {
        if (!this.setValue) {
            this.duration =  2;
            this.distanceX = this.pos2.position.x - this.node.position.x;
            this.distanceY = this.pos2.position.y - this.node.position.y;
            this.speedX = this.distanceX / this.duration
            this.speedY = this.distanceY / this.duration
            this.setValue = true;
        } else {
            this.node.x += this.speedX * dt;
            this.node.y += this.speedY * dt;
        }
    }
});
