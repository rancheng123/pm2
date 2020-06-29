//启动程序
    pm2 start ./app.js \
    -i 1 \
    --name ranchengApp \
    --watch \     # 监控文件变化，并且重启服务
    --log './log.log'    # Specify log file


//查看程序
    pm2 ls

//开启某个程序
    pm2  start      0/*程序id 或名称*/
         restart

         stop
         reload  // reload 和restart 有什么区别 ？？？？？

         delete
         kill 杀死所有进程

         //监控
         monitor
         unmonitor

         show  查看该进程的所有参数

         dash  查看仪表盘（命令行）

         log

//监控系统
    // 打开监控仪表盘
    pm2 open

    //添加 监控bucket
    pm2 plus

    //将应用 与监控仪表盘关联
    pm2 link ie1vtl7n2lu1g25/*secret*/ sx6yqexkmoloilh/*public*/

