## buffer 结构

buffer 应运而生的原因：node 要处理图片，操作数据库，接收上传文件，处理二进制数据等，JS 自有的字符串无法来处理。关于 buffer，感觉和 byte 数组很像吧。

Buffer 内存分配 `slab` 分配方式。。

## buffer 与字符串互相转换

1. string => buffer `new Buffer(str, [encoding]);`
2. buffer => string `buf.toString([encoding], [start], [end])`