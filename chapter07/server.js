/*
 * tcp
var net = require('net');
var server = net.createServer(function (socket) {
  socket.on('data', function (data) {
    socket.write("1234");
    console.log(data.toString());
  });
  socket.on('end', function () {
    console.log('out');
  });
  socket.write("5678");
});
server.listen(8124, function () {
  console.log('server bound');
});
*/

// http

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');