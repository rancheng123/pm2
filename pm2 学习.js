//启动程序
    pm2 restart app.js \
    -i 4 \
    --name ranchengApp \
    --watch \     # 监控文件变化，并且重启服务
    --log ./log.log    # Specify log file
