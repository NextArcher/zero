

//Cocos Cleator下的类
cc.Class(
    {
    extends: cc.Component,

    //变量存储?
    properties: 
    {
        //跳跃高度
        jumpHeight: 0,
        //跳跃持续时间
        jumpDuration: 0,
        //移动速度
        maxMoveSpeed: 0,
        //加速
        accel: 0,
        //声明音源对象
        jumpAudio:
        {
            default: null,
            type: cc.AudioClip
        },
    },

    setJumpAction: function()
    {
        //跳跃上升
        var jumpUp = cc.moveBy(this.jumpDuration,cc.v2(0,this.jumpHeight)).easing(cc.easeCubicActionOut());
        //落下
        var jumpDown = cc.moveBy(this.jumpDuration,cc.v2(0,-this.jumpHeight)).easing(cc.easeCubicActionIn());

        //使用委托调用播放声音方法
        var callback = cc.callFunc(this.playJumpSound,this);

        //重复
        return cc.repeatForever(cc.sequence(jumpUp,jumpDown));
    },

    //播放声音方法
    playJumpSound()
    {
        cc.audioEngine.playEffect(this.jumpAction,false);
    },
    


    //按下事件
    onKeyDown (event)
    {
        switch(event.keyCode)
        {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    },

    //松键事件
    onKeyUp (event)
    {
        switch(event.keyCode)
        {
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
     onLoad () 
     {
         //初始化跳跃动作
         this.jumpAction = this.setJumpAction();
         this.node.runAction(this.jumpAction);

         //加速度开关
         this.accLeft = false;
         this.accRight = false;
         //速度默认值
         this.xSpeed = 0;

         //类.系统事件.开启(事件类型.按下按键,响应事件)
         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);

     },

     //#region 关闭按键响应事件方法
     //关闭按键响应事件方法
     onDestroy()
     {
        //类.系统事件.关闭(事件类型.按下按键,响应事件)
         cc.systemEvent.off(cc.systemEvent.EventType.KEY_DOWN.onKeyDown,this);
         cc.systemEvent.off(cc.systemEvent.EventType.KEY_UP,this.onKeyUp,thisz);
     },
     //#endregion

    start () 
    {

    },

    //会是unity的update吗？ :function与原先的update又有什么区别？ dt是帧率吗?
    //与unity的update无异 :function是JS的语法 dt ==> deleteTime
     update (dt) 
     {
         //这里只是获取移速并没有实现位移
         if(this.accLeft)
         {
             //物体.X轴 -= 物体.速度 * 帧率?
             this.xSpeed -= this.accel * dt;
         }
         else if(this.accRight)
         {
             this.xSpeed += this.accel * dt;
         }

         //限制移速 不能超过最大值
         if(Math.abs(this.xSpeed) > this.maxMoveSpeed)
         {
             this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
         }

         //位移实现
         this.node.x += this.xSpeed * dt;

         //即使停止了Action也会执行
         cc.log("01");
     },


    });
