process.nextTick(function () {
console.log('nextTick执行1');
});
process.nextTick(function () {
console.log('nextTick执行2');
});
// 加入􀬇􀟲setImmediate()的回调函数
setImmediate(function () {
console.log('setImmediate执行1');
// 进入􁀰􀙒循环
process.nextTick(function () {
console.log('势入');
});
});
setImmediate(function () {
console.log('setImmediate执行2');
});
console.log('正常执行');