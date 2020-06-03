"use strict";
cc._RF.push(module, '09a7eEP2/lHoqN/wNgHYRp2', 'Star');
// Scripts/Star.js

"use strict";

cc.Class({
  "extends": cc.Component,
  //声明公共变量方法
  properties: {
    pickRadius: 0
  },
  // LIFE-CYCLE CALLBACKS:
  //获取玩家与本物体的距离方法
  getPlayerDistance: function getPlayerDistance() {
    //获取玩家位置
    var playerPos = this.game.player.getPosition(); //获取玩家与本物体的距离

    var dist = this.node.position.sub(playerPos).mag(); //返回本物体与玩家的距离数值

    return dist;
  },
  //生成新星并销毁本物体方法
  onPicked: function onPicked() {
    //调用方法生成新星
    this.game.spawnNewStar(); //调用 Game_script 脚本的更新得分显示方法方法

    this.game.gainScore(); //销毁本物体

    this.node.destroy();
  },
  //每帧调用
  update: function update(dt) {
    //玩家的位置与本物体 < 60
    if (this.getPlayerDistance() < this.pickRadius) {
      //调用
      this.onPicked();
      return;
    } //获逐计时器剩余时间降低透明度数值


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50; //当前物体.不透明度 =  floor寻求整数

    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  },
  //调用destroy后执行
  onDestroy: function onDestroy() {
    cc.log("销毁一颗星星");
  }
});

cc._RF.pop();