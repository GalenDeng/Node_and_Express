module.exports = Person;    //整个构造器暴露了

function Person (name) {
  this.name = name;
};

//通过函数实现类
//使用prototype来构成一个类 Person为类 talk为类中的方法
Person.prototype.talk = function () {
  console.log('我的名字是',this.name);
};