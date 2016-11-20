## 单元测试

断言，assert，

```
var assert = require('assert');
assert.equal(Math.max(1, 100), 100);
```

测试框架，mocha

测试用例，代码覆盖率，

## 性能测试

**单元测试检查代码是否符合预期，性能测试检查能否满足生产环境的性能要求，能否承担实际业务带来的压力。**

low：

```javascript
var run = function (name, times, fn, arr, callback) {
  var start = (new Date()).getTime(); //start time
  for (var i = 0; i < times; i++) {
    fn(arr, callback);
  }
  var end = (new Date()).getTime(); //end time
  console.log('Running s d times cost % % %d ms', name, times, end - start);
};
```

beachmark 模块

压力测试，