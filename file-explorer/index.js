

//获取文件列表 异步操作版本

/* 
  var fs = require('fs')
  fs.readdir(__dirname,function(err,files) {
  console.log(files);
}) */

/* fs.readdir(process.cwd(),function(err,files) {
  console.log('') 

if(!files.length) {
    return console.log('    \033[31m No files to show!\033[39m\n');
}

console.log('   select which file or directory you want to see\n');
//异步操作
function file(i) {
  var filename = files[i];

  fs,stat(__dirname + '/' + filename,function (err,stat) {
    if (stat.isDirectory()) {
      return console.log('    ' +i+'  \033[36m' + filename + '/\033[39m');
    } else {
      return console.log('    ' +i+'  \033[90m' + filename + '/\033[39m');      
    }

    i++;

    if (i == files.length) {
      console.log('') 
      process.stdout.write('    \033[33mEnter your choice:  \033[39m');
      //用户输入
      process.stdin.resume()     
    } else {
      //递归
      file(i)
    }
  });
}
  //初始化
 file(0); 
}) */


//创建了stdin和stdout的快捷变量
var fs = require('fs'),stdin = process.stdin,stdout = process.stdout
/* fs.readdir(process.cwd(),function(err,files) {
  console.log('') 

if(!files.length) {
    return console.log('    \033[31m No files to show!\033[39m\n');
}
}; */
/* console.log('   select which file or directory you want to see\n'); */
//异步操作

function file(i) {
  var filename = files[i];

  fs,stat(__dirname + '/' + filename,function (err,stat) {
    if (stat.isDirectory()) {
      return console.log('    ' +i+'  \033[36m' + filename + '/\033[39m');
    } else {
      return console.log('    ' +i+'  \033[90m' + filename + '/\033[39m');      
    }


    if (++i == files.length) {
      read();
    } else {
      //递归
      file(i)
    }
  });
}

function read() {
  console.log('')
  stdout.write('    \033[33mEnter your choice:  \033[39m')
  stdin.resume();
  //设置编码方式
  stdin.setEncoding('utf8');
  //监听data的事件
  stdin.on('data',option);
}