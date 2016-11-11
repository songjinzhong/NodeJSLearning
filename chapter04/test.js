var toString = Object.prototype.toString;
var isString = function (obj) {
  return toString.call(obj) == '[object String]';
};
var isFunction = function (obj) {
  return toString.call(obj) == '[object Function]';
};
console.log(isFunction(isFunction));
console.log(isString("a"));

var isType = function (type) {
  return function (obj) {
    return toString.call(obj) == '[object ' + type + ']';
};
};
var isString = isType('String');
var isFunction = isType('Function');

console.log(isFunction(isFunction));
console.log(isString("a"));
console.log(isString(isString));

_.after = function(times, func) {
  if (times <= 0) return func();
  return function() {
    if (--times < 1) { return func.apply(this, arguments); }
  };
};

//继承
var events = require('events');
function Stream() {
  events.EventEmitter.call(this);
}
util.inherits(Stream, events.EventEmitter);

//多次反复查询数据库
var status = "ready";
var select = function (callback) {
  if (status === "ready") {
    status = "pending";
    db.select("SQL", function (results) {
      status = "ready";
      callback(results);
    });
  }
};