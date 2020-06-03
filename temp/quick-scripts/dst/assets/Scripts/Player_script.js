
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player_script.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5af34TJ7PJLVLk2YEypk8D8', 'Player_script');
// Scripts/Player_script.js

"use strict";

//Cocos Cleator下的类
cc.Class({
  "extends": cc.Component,
  //变量存储?
  properties: {
    //跳跃高度
    jumpHeight: 0,
    //跳跃持续时间
    jumpDuration: 0,
    //移动速度
    maxMoveSpeed: 0,
    //加速
    accel: 0,
    //声明音源对象
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  setJumpAction: function setJumpAction() {
    //跳跃上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); //落下

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); //使用委托调用播放声音方法

    var callback = cc.callFunc(this.playJumpSound, this); //重复

    return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
  },
  //播放声音方法
  playJumpSound: function playJumpSound() {
    cc.audioEngine.playEffect(this.jumpAction, false);
  },
  //按下事件
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  //松键事件
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  // LIFE-CYCLE CALLBACKS:
  //相当于Awake?
  //相当于awake
  onLoad: function onLoad() {
    //初始化跳跃动作
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction); //加速度开关

    this.accLeft = false;
    this.accRight = false; //速度默认值

    this.xSpeed = 0; //类.系统事件.开启(事件类型.按下按键,响应事件)

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  //#region 关闭按键响应事件方法
  //关闭按键响应事件方法
  onDestroy: function onDestroy() {
    //类.系统事件.关闭(事件类型.按下按键,响应事件)
    cc.systemEvent.off(cc.systemEvent.EventType.KEY_DOWN.onKeyDown, this);
    cc.systemEvent.off(cc.systemEvent.EventType.KEY_UP, this.onKeyUp, thisz);
  },
  //#endregion
  start: function start() {},
  //会是unity的update吗？ :function与原先的update又有什么区别？ dt是帧率吗?
  //与unity的update无异 :function是JS的语法 dt ==> deleteTime
  update: function update(dt) {
    //这里只是获取移速并没有实现位移
    if (this.accLeft) {
      //物体.X轴 -= 物体.速度 * 帧率?
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } //限制移速 不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } //位移实现


    this.node.x += this.xSpeed * dt; //即使停止了Action也会执行

    cc.log("01");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyX3NjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImp1bXBIZWlnaHQiLCJqdW1wRHVyYXRpb24iLCJtYXhNb3ZlU3BlZWQiLCJhY2NlbCIsImp1bXBBdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJzZXRKdW1wQWN0aW9uIiwianVtcFVwIiwibW92ZUJ5IiwidjIiLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJqdW1wRG93biIsImVhc2VDdWJpY0FjdGlvbkluIiwiY2FsbGJhY2siLCJjYWxsRnVuYyIsInBsYXlKdW1wU291bmQiLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJqdW1wQWN0aW9uIiwib25LZXlEb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwiYWNjTGVmdCIsImQiLCJhY2NSaWdodCIsIm9uS2V5VXAiLCJvbkxvYWQiLCJub2RlIiwicnVuQWN0aW9uIiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJ0aGlzeiIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJNYXRoIiwiYWJzIiwieCIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FDSTtBQUNBLGFBQVNELEVBQUUsQ0FBQ0UsU0FEWjtBQUdBO0FBQ0FDLEVBQUFBLFVBQVUsRUFDVjtBQUNJO0FBQ0FDLElBQUFBLFVBQVUsRUFBRSxDQUZoQjtBQUdJO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQUpsQjtBQUtJO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQU5sQjtBQU9JO0FBQ0FDLElBQUFBLEtBQUssRUFBRSxDQVJYO0FB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bGVhdG9y5LiL55qE57G7XHJcbmNjLkNsYXNzKFxyXG4gICAge1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIC8v5Y+Y6YeP5a2Y5YKoP1xyXG4gICAgcHJvcGVydGllczogXHJcbiAgICB7XHJcbiAgICAgICAgLy/ot7Pot4Ppq5jluqZcclxuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxyXG4gICAgICAgIC8v6Lez6LeD5oyB57ut5pe26Ze0XHJcbiAgICAgICAganVtcER1cmF0aW9uOiAwLFxyXG4gICAgICAgIC8v56e75Yqo6YCf5bqmXHJcbiAgICAgICAgbWF4TW92ZVNwZWVkOiAwLFxyXG4gICAgICAgIC8v5Yqg6YCfXHJcbiAgICAgICAgYWNjZWw6IDAsXHJcbiAgICAgICAgLy/lo7DmmI7pn7PmupDlr7nosaFcclxuICAgICAgICBqdW1wQXVkaW86XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzZXRKdW1wQWN0aW9uOiBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy/ot7Pot4PkuIrljYdcclxuICAgICAgICB2YXIganVtcFVwID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLGNjLnYyKDAsdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcclxuICAgICAgICAvL+iQveS4i1xyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbixjYy52MigwLC10aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSk7XHJcblxyXG4gICAgICAgIC8v5L2/55So5aeU5omY6LCD55So5pKt5pS+5aOw6Z+z5pa55rOVXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2MuY2FsbEZ1bmModGhpcy5wbGF5SnVtcFNvdW5kLHRoaXMpO1xyXG5cclxuICAgICAgICAvL+mHjeWkjVxyXG4gICAgICAgIHJldHVybiBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGp1bXBVcCxqdW1wRG93bikpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+aSreaUvuWjsOmfs+aWueazlVxyXG4gICAgcGxheUp1bXBTb3VuZCgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBY3Rpb24sZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIFxyXG5cclxuXHJcbiAgICAvL+aMieS4i+S6i+S7tlxyXG4gICAgb25LZXlEb3duIChldmVudClcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy/mnb7plK7kuovku7ZcclxuICAgIG9uS2V5VXAgKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8v55u45b2T5LqOQXdha2U/XHJcbiAgICAvL+ebuOW9k+S6jmF3YWtlXHJcbiAgICAgb25Mb2FkICgpIFxyXG4gICAgIHtcclxuICAgICAgICAgLy/liJ3lp4vljJbot7Pot4PliqjkvZxcclxuICAgICAgICAgdGhpcy5qdW1wQWN0aW9uID0gdGhpcy5zZXRKdW1wQWN0aW9uKCk7XHJcbiAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuXHJcbiAgICAgICAgIC8v5Yqg6YCf5bqm5byA5YWzXHJcbiAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgIC8v6YCf5bqm6buY6K6k5YC8XHJcbiAgICAgICAgIHRoaXMueFNwZWVkID0gMDtcclxuXHJcbiAgICAgICAgIC8v57G7Luezu+e7n+S6i+S7ti7lvIDlkK8o5LqL5Lu257G75Z6LLuaMieS4i+aMiemUrizlk43lupTkuovku7YpXHJcbiAgICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTix0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLm9uS2V5VXAsdGhpcyk7XHJcblxyXG4gICAgIH0sXHJcblxyXG4gICAgIC8vI3JlZ2lvbiDlhbPpl63mjInplK7lk43lupTkuovku7bmlrnms5VcclxuICAgICAvL+WFs+mXreaMiemUruWTjeW6lOS6i+S7tuaWueazlVxyXG4gICAgIG9uRGVzdHJveSgpXHJcbiAgICAge1xyXG4gICAgICAgIC8v57G7Luezu+e7n+S6i+S7ti7lhbPpl60o5LqL5Lu257G75Z6LLuaMieS4i+aMiemUrizlk43lupTkuovku7YpXHJcbiAgICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5zeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04ub25LZXlEb3duLHRoaXMpO1xyXG4gICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2Muc3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLm9uS2V5VXAsdGhpc3opO1xyXG4gICAgIH0sXHJcbiAgICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgc3RhcnQgKCkgXHJcbiAgICB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvL+S8muaYr3VuaXR555qEdXBkYXRl5ZCX77yfIDpmdW5jdGlvbuS4juWOn+WFiOeahHVwZGF0ZeWPiOacieS7gOS5iOWMuuWIq++8nyBkdOaYr+W4p+eOh+WQlz9cclxuICAgIC8v5LiOdW5pdHnnmoR1cGRhdGXml6DlvIIgOmZ1bmN0aW9u5pivSlPnmoTor63ms5UgZHQgPT0+IGRlbGV0ZVRpbWVcclxuICAgICB1cGRhdGUgKGR0KSBcclxuICAgICB7XHJcbiAgICAgICAgIC8v6L+Z6YeM5Y+q5piv6I635Y+W56e76YCf5bm25rKh5pyJ5a6e546w5L2N56e7XHJcbiAgICAgICAgIGlmKHRoaXMuYWNjTGVmdClcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgLy/niankvZMuWOi9tCAtPSDniankvZMu6YCf5bqmICog5bin546HP1xyXG4gICAgICAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYodGhpcy5hY2NSaWdodClcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvL+mZkOWItuenu+mAnyDkuI3og73otoXov4fmnIDlpKflgLxcclxuICAgICAgICAgaWYoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy/kvY3np7vlrp7njrBcclxuICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcclxuXHJcbiAgICAgICAgIC8v5Y2z5L2/5YGc5q2i5LqGQWN0aW9u5Lmf5Lya5omn6KGMXHJcbiAgICAgICAgIGNjLmxvZyhcIjAxXCIpO1xyXG4gICAgIH0sXHJcblxyXG5cclxuICAgIH0pO1xyXG4iXX0=