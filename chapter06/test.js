console.log("0123456789".length); // 10
console.log("一松江镇".length); //4
console.log("\u00bd".length); // 1

var str = "深入浅出 NODE jst";
var buf = new Buffer(str, 'utf-8');
console.log(buf);
console.log(new Buffer("abcdefg", 'utf-8'));
console.log(buf.length);
console.log(buf[20]);

console.log(buf.toString('utf-8'));

console.log(Buffer.isEncoding('GBK'));
console.log(Buffer.isEncoding('utf-8'));

var iconv = require('iconv-lite');

var buf2 = iconv.encode("宋进忠", "GBK");
console.log(buf2)
console.log(iconv.decode(buf2, "GBK"));

/*
 buffer concat 过程
*/
Buffer.concat = function(list, length) {
if (!Array.isArray(list)) {
throw new Error('Usage: Buffer.concat(list, [length])');
}
if (list.length === 0) {
return new Buffer(0);
} else if (list.length === 1) {
return list[0];
}
if (typeof length !== 'number') {
length = 0;
for (var i = 0; i < list.length; i++) {
var buf = list[i];
length += buf.length;
}
}
var buffer = new Buffer(length);
var pos = 0;
for (var i = 0; i < list.length; i++) {
var buf = list[i];
buf.copy(buffer, pos);
pos += buf.length;
}
return buffer;
};