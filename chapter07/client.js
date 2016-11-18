/*
 * tcp
var net = require('net');
var client = net.connect({port: 8124}, function () { 
  console.log('client connected');
  client.write('9');
});
client.on('data', function (data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function () {
  console.log('client disconnected');
});
*/

// http
// 请用浏览器访问 1337 端口

//下面是 客户端程序
var http = require("http");

var options = {
  hostname: '127.0.0.1',
  port: 1337,
  path: '/',
  method: 'GET'
};
var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8'); //防止乱码
  res.on('data', function (chunk) {
    console.log(chunk);
  });
});
req.end();