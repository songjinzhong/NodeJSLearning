## buffer 结构

buffer 应运而生的原因：node 要处理图片，操作数据库，接收上传文件，处理二进制数据等，JS 自有的字符串无法来处理。关于 buffer，感觉和 byte 数组很像吧。

Buffer 内存分配 `slab` 分配方式。。

## buffer 与字符串互相转换

1. string => buffer `new Buffer(str, [encoding]);`
2. buffer => string `buf.toString([encoding], [start], [end])`

对于不支持的编码类型 通过 iconv 和 iconv-lite

## 乱码问题

有一个问题：

```
var fs = require('fs');
var rs = fs.createReadStream('test.md');
var data = '';
rs.on("data", function (chunk){
// 问题出在这里
data += chunk;
});
rs.on("end", function () {
console.log(data);
});
```

中文每个字节是 3 byte 的宽字节，highwatermark 为 11，

通过手动设置 编码方式 `stream.setEncoding('utf8');`，但无法从根本上解决问题

上面的方法想不通，下面用拼接的方式：

```
var chunks = [];
var size = 0;
res.on('data', function (chunk) {
  chunks.push(chunk);
  size += chunk.length;
});
res.on('end', function () {
  var buf = Buffer.concat(chunks, size);
  var str = iconv.decode(buf, 'utf8');
  console.log(str);
});
```

## buffer 性能