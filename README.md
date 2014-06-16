Timing
======

一个简单的js计时器

###Example

```js
var timing = new Timing();
timing.begin();
for(let i=0;i<100000;i++);
timing.end(function(t){
  //控制台输出时间间隔
  console.log(t);
});
delete timing;
```

