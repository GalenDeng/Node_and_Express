## Node中的JavaScript (2017.10.18)
1. `全局对象`
* 浏览器  ： window对象
* Node    
global  ： 和window对象一样，任何global对象上的属性都可以被全局访问到
process :  所有全局执行上下文中的内容都在process对象中

2. `模块系统`
* 引入第三方模块时，最好它也暴露一个(或者多个)全局变量
example:
html文档中引入 <script src="http://code.jquery.com/jquery-1.6.0.js"> 你可以
通过该模块上的jQuery对象来使用：
<script>
    jQuery(function (){
        alert('hello world!');
    });
</script>
3. `绝对模块`
* 绝对模块是指Node通过在其内部的node_modules查找到的模块，或者Node内置的如fs这样的模块.
example:
./node_modules/colors
* 这个时候，可以直接通过名字来require这个模块，无须添加路径名：
  require('colors')  //这里不需要暴露API
* 需要暴露API的时候，写成如下形式：
  var fs = require('fs');
  fs.readFile('/some/file',function (err,contents) {
      if (!err) console.log(contents);
  })
4. `相对模块`
* 相对模块将require指向一个相对工作目录中的JavaScript文件
* [相对模块代码示例](https://github.com/GalenDeng/Node_and_Express/tree/master/Relative_module)
```
main.js
require('./module_a')
require('./module_b')

执行：
E:\Node_and_Express\Relative_module>node main
this is a
this is b
```
5. `暴露API---exports OR module`
* 要让模块暴露一个API成为require调用的返回值，就要依靠module和exports这两个全局变量
* [代码示例](https://github.com/GalenDeng/Node_and_Express/tree/master/%E6%9A%B4%E9%9C%B2API)
```
执行方式：
F:\暴露API>node index.js
galen
this is some data
5
```
6. `暴露构造器,重写module.exports`
* [代码示例](https://github.com/GalenDeng/Node_and_Express/tree/master/%E6%9A%B4%E9%9C%B2%E6%9E%84%E9%80%A0%E5%99%A8--%E9%87%8D%E5%86%99module.exports)
