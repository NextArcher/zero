
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game_script.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef10bnfGDhOnZfmohydxLOu', 'Game_script');
// Scripts/Game_script.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //这个属性引用了星星预制体资源
    starPrefab: {
      //无默认值
      "default": null,
      //类型 预制体
      type: cc.Prefab
    },
    //时间范围
    maxStarDuration: 0,
    minStarDuration: 0,
    //获取地面节点
    ground: {
      "default": null,
      type: cc.Node
    },
    //获取主角
    player: {
      "default": null,
      type: cc.Node
    },
    //文本对象
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    //声明音源属性
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    //获取地面Y轴值
    this.groundY = this.ground.y + this.ground.height / 2; //计时器

    this.timer = 0;
    this.starDuration = 0; //调用方法 生成新星

    this.spawnNewStar(); //初始化分数

    this.score = 0;
  },
  //生成新星方法
  spawnNewStar: function spawnNewStar() {
    //类型 对象n = 类.生成(传入的物体)
    var newStar = cc.instantiate(this.starPrefab); //将对象n添加到 Canvas 节点下

    this.node.addChild(newStar); //设置对象n基于父物体的位置(XY或vec2)

    newStar.setPosition(this.getNewStarPosition()); //在星星组件上暂存 game 引用

    newStar.getComponent('Star').game = this; // 重置计时器，根据消失时间范围随机取一个值

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    //横轴归零
    var randX = 0; //纵轴 = 地面的Y轴 + 数学.随机() * 玩家人物.'Player'脚本.跳跃高度值 + 50 

    var randY = this.groundY + Math.random() * this.player.getComponent('Player_script').jumpHeight + 50; //根据屏幕宽度 随机得到一个X坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; //返回XY轴值

    return cc.v2(randX, randY);
  },
  update: function update(dt) {
    if (this.timer > this.starDuration) {
      this.gameOver(); //有执行到
      //cc.log("Game Over");

      return;
    }

    this.timer += dt;
  },
  //更新得分显示方法
  gainScore: function gainScore() {
    //分数+=1
    this.score += 1; //刷新文本信息

    this.scoreDisplay.string = 'Score: ' + this.score; //播放音效

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  //游戏结束方法
  gameOver: function gameOver() {
    //停止玩家对象的动作
    this.node.player.stopAllActions(); //cc.director.loadScene('game');

    /*
    this.player.stopAllActions(); //停止 player 节点的跳跃动作
    cc.director.loadScene('game');
    */

    cc.log("game over");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZV9zY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm1heFN0YXJEdXJhdGlvbiIsIm1pblN0YXJEdXJhdGlvbiIsImdyb3VuZCIsIk5vZGUiLCJwbGF5ZXIiLCJzY29yZURpc3BsYXkiLCJMYWJlbCIsInNjb3JlQXVkaW8iLCJBdWRpb0NsaXAiLCJvbkxvYWQiLCJncm91bmRZIiwieSIsImhlaWdodCIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwic3Bhd25OZXdTdGFyIiwic2NvcmUiLCJuZXdTdGFyIiwiaW5zdGFudGlhdGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImdldE5ld1N0YXJQb3NpdGlvbiIsImdldENvbXBvbmVudCIsImdhbWUiLCJNYXRoIiwicmFuZG9tIiwicmFuZFgiLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJ2MiIsInVwZGF0ZSIsImR0IiwiZ2FtZU92ZXIiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJzdG9wQWxsQWN0aW9ucyIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUNWO0FBQ0k7QUFDQUMsSUFBQUEsVUFBVSxFQUNWO0FBQ0k7QUFDQSxpQkFBUyxJQUZiO0FBR0k7QUFDQUMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBSmIsS0FISjtBQVVJO0FBQ0FDLElBQUFBLGVBQWUsRUFBRSxDQVhyQjtBQVlJQyxJQUFBQSxlQUFlLEVBQUUsQ0FackI7QUFjSTtBQUNBQyxJQUFBQSxNQUFNLEVBQ047QUFDSSxpQkFBUyxJQURiO0FBRUlKLE1BQUFB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STtBQXdITDtBQUNBNEIsRUFBQUEsUUF6SEssc0JBMEhMO0FBQ0k7QUFDQSxTQUFLaEIsSUFBTCxDQUFVZixNQUFWLENBQWlCb0MsY0FBakIsR0FGSixDQUlJOztBQUVBOzs7OztBQUtBL0MsSUFBQUEsRUFBRSxDQUFDZ0QsR0FBSCxDQUFPLFdBQVA7QUFDSDtBQXRJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiBcclxuICAgIHtcclxuICAgICAgICAvL+i/meS4quWxnuaAp+W8leeUqOS6huaYn+aYn+mihOWItuS9k+i1hOa6kFxyXG4gICAgICAgIHN0YXJQcmVmYWIgOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/ml6Dpu5jorqTlgLxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgLy/nsbvlnosg6aKE5Yi25L2TXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8v5pe26Ze06IyD5Zu0XHJcbiAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxyXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjogMCxcclxuICAgICAgICBcclxuICAgICAgICAvL+iOt+WPluWcsOmdouiKgueCuVxyXG4gICAgICAgIGdyb3VuZDogXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy/ojrflj5bkuLvop5JcclxuICAgICAgICBwbGF5ZXI6IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8v5paH5pys5a+56LGhXHJcbiAgICAgICAgc2NvcmVEaXNwbGF5OlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL+WjsOaYjumfs+a6kOWxnuaAp1xyXG4gICAgICAgIHNjb3JlQXVkaW86XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAgb25Mb2FkICgpIFxyXG4gICAgIHtcclxuICAgICAgICAvL+iOt+WPluWcsOmdolnovbTlgLxcclxuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgLy/orqHml7blmahcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IDA7XHJcblxyXG4gICAgICAgIC8v6LCD55So5pa55rOVIOeUn+aIkOaWsOaYn1xyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XHJcbiAgICAgICAgLy/liJ3lp4vljJbliIbmlbBcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuXHJcbiAgICAgfSxcclxuXHJcbiAgICAgLy/nlJ/miJDmlrDmmJ/mlrnms5VcclxuICAgIHNwYXduTmV3U3RhcigpXHJcbiAgICB7XHJcbiAgICAgICAgLy/nsbvlnosg5a+56LGhbiA9IOexuy7nlJ/miJAo5Lyg5YWl55qE54mp5L2TKVxyXG4gICAgICAgIHZhciBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKTtcclxuICAgICAgICAvL+WwhuWvueixoW7mt7vliqDliLAgQ2FudmFzIOiKgueCueS4i1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICAvL+iuvue9ruWvueixoW7ln7rkuo7niLbniankvZPnmoTkvY3nva4oWFnmiJZ2ZWMyKVxyXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIC8v5Zyo5pif5pif57uE5Lu25LiK5pqC5a2YIGdhbWUg5byV55SoXHJcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcclxuXHJcbiAgICAgICAgIC8vIOmHjee9ruiuoeaXtuWZqO+8jOagueaNrua2iOWkseaXtumXtOiMg+WbtOmaj+acuuWPluS4gOS4quWAvFxyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXdTdGFyUG9zaXRpb24gKClcclxuICAgIHtcclxuICAgIC8v5qiq6L205b2S6Zu2XHJcbiAgICB2YXIgcmFuZFggPSAwO1xyXG4gICAgLy/nurXovbQgPSDlnLDpnaLnmoRZ6L20ICsg5pWw5a2mLumaj+acuigpICog546p5a625Lq654mpLidQbGF5ZXIn6ISa5pysLui3s+i3g+mrmOW6puWAvCArIDUwIFxyXG4gICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyX3NjcmlwdCcpLmp1bXBIZWlnaHQgKyA1MDtcclxuXHJcbiAgICAvL+agueaNruWxj+W5leWuveW6piDpmo/mnLrlvpfliLDkuIDkuKpY5Z2Q5qCHXHJcbiAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xyXG5cclxuICAgIC8v6L+U5ZueWFnovbTlgLxcclxuICAgIHJldHVybiBjYy52MihyYW5kWCxyYW5kWSk7XHJcbiAgICB9LFxyXG5cclxuICAgICB1cGRhdGUgKGR0KSBcclxuICAgICB7XHJcbiAgICAgICAgIGlmKHRoaXMudGltZXIgPiB0aGlzLnN0YXJEdXJhdGlvbilcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgLy/mnInmiafooYzliLBcclxuICAgICAgICAgICAgIC8vY2MubG9nKFwiR2FtZSBPdmVyXCIpO1xyXG4gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgfSxcclxuXHJcblxyXG4gICAgLy/mm7TmlrDlvpfliIbmmL7npLrmlrnms5VcclxuICAgIGdhaW5TY29yZSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy/liIbmlbArPTFcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICAgICAgLy/liLfmlrDmlofmnKzkv6Hmga9cclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSAnU2NvcmU6ICcgKyB0aGlzLnNjb3JlO1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5pWIXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+a4uOaIj+e7k+adn+aWueazlVxyXG4gICAgZ2FtZU92ZXIoKVxyXG4gICAge1xyXG4gICAgICAgIC8v5YGc5q2i546p5a625a+56LGh55qE5Yqo5L2cXHJcbiAgICAgICAgdGhpcy5ub2RlLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG5cclxuICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7IC8v5YGc5q2iIHBsYXllciDoioLngrnnmoTot7Pot4PliqjkvZxcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmxvZyhcImdhbWUgb3ZlclwiKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSk7XHJcbiJdfQ==