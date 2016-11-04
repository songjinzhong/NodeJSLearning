## 异步 I/O

Ajax 是前端工程师最熟悉的异步操作：

```javascript
$.post('/post', {data:'data'}, function(res){
  console.log('收到响应');
});
console.log('发送完成')
```
Node 中的异步，比如读取文件：

```javascript
var fs = require('fs');
fs.readFile('/data.txt', function(err, file){
  console.log('读取完毕');
});
console.log('发送读取文件请求完毕');
```

## 事件回掉

关于回掉，对于前端人员来说，非常亲切，看一个服务器创建的例子：

```javascript
var http = require('http');
//创建服务器
http.createServer(function (req, res) {
var postData = '';
req.setEncoding('utf8');
req.on('data', function (trunk) {
  postData += trunk;
});
req.on('end', function () {
  res.end(postData);
});
}).listen(8080);
console.log('服务器启动完成');
```

## 单线程

单线程的优点：不用考虑状态同步，没有死锁，没有切换线程上下文的开销。

缺点：无法使用多核 CPU，大量占用 CPU 的计算会导致异步 I/O 出现问题

## 应用场景

1. I/O 密集型
2. 并不是不擅长 CPU 密集型
3. 可以作为中间件与原系统和平共处，相当于扩展
4. 分布式