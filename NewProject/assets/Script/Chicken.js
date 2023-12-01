
cc.Class({
    extends: cc.Component,

    properties: {
        ChickenAnimation: cc.Animation,
        pos: cc.Node,
        DieChicken: cc.Node,
        ChickenSprite: cc.Node,
        ChickenToTien: cc.Node,
        Skill: cc.Node,
        duration: 2,
        timer: 0,
        startAction: false,
        setValue: false,
        index: 0,
        actions: []
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.ChickenAnimation = this.node.getChildByName("ChickenSprite").getComponent(cc.Animation);
        this.ChickenSprite = this.node.getChildByName("ChickenSprite");
        this.node.scale = 0.5;
        this.action = [this.chickenMove, this.chickenDie, this.changeSprite];
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
    chickenMove(dt) {
        if (!this.setValue) {
            this.ChickenAnimation.play('Chicken');
            this.duration = 2;
            this.distanceX = this.pos.position.x - this.node.position.x;
            this.distanceY = this.pos.position.y - this.node.position.y;
            this.speedX = this.distanceX / this.duration;
            this.speedY = this.distanceY / this.duration;
            this.distanceScale = 0.7 - this.node.scaleX;
            this.speedScale = this.distanceScale / this.duration;
            this.setValue = true;
        } else {
            this.node.x += this.speedX * dt;
            this.node.y += this.speedY * dt;
            this.node.scale += this.speedScale * dt;
        }
    },
    chickenDie(dt) {
        if (!this.setValue) {
            this.ChickenAnimation.play('ChickenDie');
            let targetPosition = new cc.Vec2(this.pos.position.x + 200, this.pos.position.y - 30);
            this.duration = 0.5;
            this.distanceX = targetPosition.x - this.node.position.x;
            this.distanceY = targetPosition.y - this.node.position.y;
            this.speedX = this.distanceX / this.duration;
            this.speedY = this.distanceY / this.duration;
            this.setValue = true;
        } else {
            this.node.x += this.speedX * dt;
            this.node.y += this.speedY * dt;
            this.node.scale += this.speedScale * dt;
        }
    },
    changeSprite(dt) {
        if (!this.setValue) {
            this.duration = dt;
            this.ChickenSprite.active = false;
            this.DieChicken.active = true;
            this.ChickenToTien.active = true;
            this.Skill.getComponent("ThunderController").startThunder();
        }
    }
});
