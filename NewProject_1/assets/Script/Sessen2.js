// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: require("NewScript"),

    properties: {
        width: {
            get: function () {
                cc.log("get");
                return this._width;
            },
            set: function (value) {
                cc.log("set");
                this._width = value;
            }
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.width=10
        console.log(this.width);
    },

    start() {

    },

    // update (dt) {},
});
