var a = 1;

console.log(a);
console.log(222)
console.log(333);
console.log(556677);

const http = require('http');
// 创建 HTTP 服务器。
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('响应内容');
});
// 服务器正在运行。
server.listen(1337, '127.0.0.1', () => {
    console.log('server is running at 127.0.0.1:1337')
});
