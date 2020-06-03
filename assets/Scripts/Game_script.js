

cc.Class({
    extends: cc.Component,

    properties: 
    {
        //这个属性引用了星星预制体资源
        starPrefab :
        {
            //无默认值
            default: null,
            //类型 预制体
            type: cc.Prefab
        },

        //时间范围
        maxStarDuration: 0,
        minStarDuration: 0,
        
        //获取地面节点
        ground: 
        {
            default: null,
            type: cc.Node
        },

        //获取主角
        player: 
        {
            default: null,
            type: cc.Node
        },

        //文本对象
        scoreDisplay:
        {
            default: null,
            type: cc.Label
        },

        //声明音源属性
        scoreAudio:
        {
            default: null,
            type: cc.AudioClip
        },
    },

     onLoad () 
     {
        //获取地面Y轴值
        this.groundY = this.ground.y + this.ground.height / 2;

        //计时器
        this.timer = 0;
        this.starDuration = 0;

        //调用方法 生成新星
        this.spawnNewStar();
        //初始化分数
        this.score = 0;

     },

     //生成新星方法
    spawnNewStar()
    {
        //类型 对象n = 类.生成(传入的物体)
        var newStar = cc.instantiate(this.starPrefab);
        //将对象n添加到 Canvas 节点下
        this.node.addChild(newStar);
        //设置对象n基于父物体的位置(XY或vec2)
        newStar.setPosition(this.getNewStarPosition());

        //在星星组件上暂存 game 引用
        newStar.getComponent('Star').game = this;

         // 重置计时器，根据消失时间范围随机取一个值
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    },

    getNewStarPosition ()
    {
    //横轴归零
    var randX = 0;
    //纵轴 = 地面的Y轴 + 数学.随机() * 玩家人物.'Player'脚本.跳跃高度值 + 50 
    var randY = this.groundY + Math.random() * this.player.getComponent('Player_script').jumpHeight + 50;

    //根据屏幕宽度 随机得到一个X坐标
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;

    //返回XY轴值
    return cc.v2(randX,randY);
    },

     update (dt) 
     {
         if(this.timer > this.starDuration)
         {
             this.gameOver();
             //有执行到
             //cc.log("Game Over");
             return;
         }
         this.timer += dt;
     },


    //更新得分显示方法
    gainScore()
    {
        //分数+=1
        this.score += 1;
        //刷新文本信息
        this.scoreDisplay.string = 'Score: ' + this.score;
        //播放音效
        cc.audioEngine.playEffect(this.scoreAudio,false);
    },

    //游戏结束方法
    gameOver()
    {
        //停止玩家对象的动作
        this.node.player.stopAllActions();

        //cc.director.loadScene('game');

        /*
        this.player.stopAllActions(); //停止 player 节点的跳跃动作
        cc.director.loadScene('game');
        */
        
        cc.log("game over");
    }
    

});
