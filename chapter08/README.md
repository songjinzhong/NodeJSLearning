## 基础功能

1. 判断请求方法，可以通过 req.method，有 get post delete put 等方法
2. 路径解析 使用 url `url.parse(req.url).pathname`
3. 查询字符串，使用 url 和 querystring，`querystring.parse(url.parse(req.url).query);`
4. Cookie，`req.headers.cookie`，对于 Cookie 的解析。。。但 cokkie 是不安全的
5. session 依托 cookie 来实现用户记忆，一般有时间限制，通过签名，伪造 session 很难，XSS 

## 处理数据

```
function (req, res) {
  if (hasBody(req)) {
    var buffers = [];
    req.on('data', function (chunk) {
    buffers.push(chunk);
  });
  req.on('end', function () {
    req.rawBody = Buffer.concat(buffers).toString();
    handle(req, res);
  });
  } else {
    handle(req, res);
  }
}
```

对于表单数据：`querystring.parse(req.rawBody);`

文件上传，数据上传

## 路由

1. 文件类型，分为动态文件和静态文件
2. MVC

**手动映射**

```
var routes = [];
var use = function (path, action) {
  routes.push([path, action]);
};
// 添加映射
use('/user/setting', exports.setting);
use('/setting/user', exports.setting);
function (req, res) {
  var pathname = url.parse(req.url).pathname;
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];
    if (pathname === route[0]) {
      var action = route[1];
      action(req, res);
      return;
    }
  }
  // 处理404请求
  handle404(req, res);
}
```

**正则匹配**

**参数解析**

**自然映射**

## 中间件

## 页面渲染

1. 理解 Multipurpose Internet Mail Extensions（MIME），浏览器对于服务器发送的响应体不同的渲染，比如字段`res.writeHead(200, {'Content-Type': 'text/html'});` 来控制，调用 `var mime = require('mime');`；附件下载，`Content-Disposition` 字段；json；响应跳转。
2. 视图渲染
3. 模板，模板引擎，xss 安全