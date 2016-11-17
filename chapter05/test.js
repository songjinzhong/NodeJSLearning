/*
 * 经常用下面代码当作缓存，以后慎用
*/
var cache = {};
var get = function (key) {
if (cache[key]) {
return cache[key];
} else {
// get from otherwise
}
};
var set = function (key, value) {
cache[key] = value;
};

var http = require('http');
var leakArray = [];
var leak = function () {
leakArray.push("leak" + Math.random());
};
http.createServer(function (req, res) {
leak();
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');