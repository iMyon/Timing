var Timing = function(){
  //计时开始
  this.begin = function(){
    this.start = new Date();
  };
  //计时结束并调用回调函数
  this.end = function(callback){
    //回调函数参数：结束时间减去开始时间（毫秒）
    callback(new Date() - this.start);
  };
};