## TCP 

创建一个 TCP 服务器，

```
var net = require('net');
var server = net.createServer(function (socket) {
  socket.on('data', function (data) {
  socket.write("hello");
});
socket.on('end', function () {
  console.log('out');
});
  socket.write("world \n");
});
server.listen(8124, function () {
console.log('server bound');
});
```

## UDP

```
var dgram = require('dgram');
var socket = dgram.createSocket("udp4");
```

## HTTP （重点）

一个简单的 HTTP 协议请求，包括 三次握手，http响应头和响应体

1. http 模块，用 http_parser 进行解析，关于 http_parser [源码](https://github.com/nodejs/http-parser)

```
function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}
```

以上就是处理函数后的返回结果，包括 http 请求和响应，都是通过 http-parser 来处理的，req 为处理结果，包括 req.method, req.url, req.httpVersion，其他部分是 key：value 形式。

对于响应，也可以控制响应头信息，`res.writeHead(200, {'Content-Type': 'text/plain'})`，而对于响应体的填写，则是通过 `write` 和 `end` 函数，

**另外**，需要在结束的时候调用 res.end(), 不然服务器一直处于等待的状态，

接下来是 HTTP 中的事件。。。

**http 代理** http.agent

## websocket 服务

```
var socket = new WebSocket('ws://127.0.0.1:12010/updates');
socket.onopen = function () {
  setInterval(function() {
    if (socket.bufferedAmount == 0)
    socket.send(getUpdateData());
  }, 50);
};
socket.onmessage = function (event) {
  // TODO：event.data
};
```

## 网络服务与安全

1. TLS/SSL，数字证书，
2. https 服务器端和客户端