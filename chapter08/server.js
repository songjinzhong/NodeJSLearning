var http = require('http');
var url = require('url');
var app = http.createServer(function(req, res){
  var pathname = url.parse(req.url).pathname;
  res.write('pathname = ' + pathname + '\n');
  console.log(ROOT);
  res.end("hello world");
});
app.listen("2222");
console.log('server start at 127.0.0.1:2222');