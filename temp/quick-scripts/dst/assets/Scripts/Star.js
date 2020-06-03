
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCIsIm9wYWNpdHlSYXRpbyIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwibWluT3BhY2l0eSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiLCJvbkRlc3Ryb3kiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0w7QUFDQUMsRUFBQUEsVUFBVSxFQUNWO0FBQ0lDLElBQUFBLFVBQVUsRUFBRTtBQURoQixHQUxLO0FBU0w7QUFFQTtBQUNBQyxFQUFBQSxpQkFaSywrQkFhTDtBQUNJO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsV0FBakIsRUFBaEIsQ0FGSixDQUdJOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCUCxTQUF2QixFQUFrQ1EsR0FBbEMsRUFBWCxDQUpKLENBTUk7O0FBQ0EsV0FBT0osSUFBUDtBQUNILEdBckJJO0FBdUJMO0FBQ0FLLEVBQUFBLFFBeEJLLHNCQXlCTDtBQUNJO0FBQ0EsU0FBS1IsSUFBTCxDQUFVUyxZQUFWLEdBRkosQ0FHSTs7QUFDQSxTQUFLVCxJQUFMLENBQVVVLFNBQVYsR0FKSixDQUtJOztBQUNBLFNBQUtOLElBQUwsQ0FBVU8sT0FBVjtBQUNILEdBaENJO0FBa0NMO0FBQ0NDLEVBQUFBLE1BbkNJLGtCQW1DSUMsRUFuQ0osRUFvQ0o7QUFDRztBQUNBLFFBQUcsS0FBS2YsaUJBQUwsS0FBMkIsS0FBS0QsVUFBbkMsRUFDQTtBQUNJO0FBQ0EsV0FBS1csUUFBTDtBQUNBO0FBQ0gsS0FQSixDQVNHOzs7QUFDQSxRQUFJTSxZQUFZLEdBQUcsSUFBSSxLQUFLZCxJQUFMLENBQVVlLEtBQVYsR0FBZ0IsS0FBS2YsSUFBTCxDQUFVZ0IsWUFBakQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakIsQ0FYSCxDQVlHOztBQUNBLFNBQUtiLElBQUwsQ0FBVWMsT0FBVixHQUFvQkQsVUFBVSxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV04sWUFBWSxJQUFJLE1BQU1HLFVBQVYsQ0FBdkIsQ0FBakM7QUFFRixHQW5ERztBQXFESjtBQUNBSSxFQUFBQSxTQXRESSx1QkF1REo7QUFDSTVCLElBQUFBLEVBQUUsQ0FBQzZCLEdBQUgsQ0FBTyxRQUFQO0FBQ0g7QUF6REcsQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgLy/lo7DmmI7lhazlhbHlj5jph4/mlrnms5VcclxuICAgIHByb3BlcnRpZXM6XHJcbiAgICB7XHJcbiAgICAgICAgcGlja1JhZGl1czogMCxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy/ojrflj5bnjqnlrrbkuI7mnKzniankvZPnmoTot53nprvmlrnms5VcclxuICAgIGdldFBsYXllckRpc3RhbmNlKClcclxuICAgIHtcclxuICAgICAgICAvL+iOt+WPlueOqeWutuS9jee9rlxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy/ojrflj5bnjqnlrrbkuI7mnKzniankvZPnmoTot53nprtcclxuICAgICAgICB2YXIgZGlzdCA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocGxheWVyUG9zKS5tYWcoKTtcclxuXHJcbiAgICAgICAgLy/ov5Tlm57mnKzniankvZPkuI7njqnlrrbnmoTot53nprvmlbDlgLxcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH0sXHJcblxyXG4gICAgLy/nlJ/miJDmlrDmmJ/lubbplIDmr4HmnKzniankvZPmlrnms5VcclxuICAgIG9uUGlja2VkKClcclxuICAgIHtcclxuICAgICAgICAvL+iwg+eUqOaWueazleeUn+aIkOaWsOaYn1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zcGF3bk5ld1N0YXIoKTtcclxuICAgICAgICAvL+iwg+eUqCBHYW1lX3NjcmlwdCDohJrmnKznmoTmm7TmlrDlvpfliIbmmL7npLrmlrnms5Xmlrnms5VcclxuICAgICAgICB0aGlzLmdhbWUuZ2FpblNjb3JlKCk7XHJcbiAgICAgICAgLy/plIDmr4HmnKzniankvZNcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+avj+W4p+iwg+eUqFxyXG4gICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAgIHtcclxuICAgICAgICAvL+eOqeWutueahOS9jee9ruS4juacrOeJqeS9kyA8IDYwXHJcbiAgICAgICAgaWYodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgdGhpcy5waWNrUmFkaXVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/osIPnlKhcclxuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iOt+mAkOiuoeaXtuWZqOWJqeS9meaXtumXtOmZjeS9jumAj+aYjuW6puaVsOWAvFxyXG4gICAgICAgIHZhciBvcGFjaXR5UmF0aW8gPSAxIC0gdGhpcy5nYW1lLnRpbWVyL3RoaXMuZ2FtZS5zdGFyRHVyYXRpb247XHJcbiAgICAgICAgdmFyIG1pbk9wYWNpdHkgPSA1MDtcclxuICAgICAgICAvL+W9k+WJjeeJqeS9ky7kuI3pgI/mmI7luqYgPSAgZmxvb3Llr7vmsYLmlbTmlbBcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IG1pbk9wYWNpdHkgKyBNYXRoLmZsb29yKG9wYWNpdHlSYXRpbyAqICgyNTUgLSBtaW5PcGFjaXR5KSk7XHJcbiAgICAgICAgXHJcbiAgICAgfSxcclxuXHJcbiAgICAgLy/osIPnlKhkZXN0cm955ZCO5omn6KGMXHJcbiAgICAgb25EZXN0cm95KClcclxuICAgICB7XHJcbiAgICAgICAgIGNjLmxvZyhcIumUgOavgeS4gOmil+aYn+aYn1wiKTtcclxuICAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==