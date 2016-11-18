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