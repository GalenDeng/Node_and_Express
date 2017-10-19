

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
var fs = require('fs'),
stdin = process.stdin,
stdout = process.stdout
var cwd = process.cwd()
fs.readdir(cwd,function(err,files) {
  //避免再次执行fs.stat,我们在file函数中,将stat对象保存下来
  var stats = [];
  console.log('') 
  if( !files.length) {
		return console.log('   \033[31m Nofile\033[39m\n');
}

console.log('select a file what you want');

var file = function(i) {
  var filename = files[i];

  fs.stat(__dirname + '/' + filename, function(err, stat) {
    stats[i] = stat;
    if (stat.isDirectory()) {
      console.log('' + i + ' ' + '\033[36m' + filename + '/\033[39m');
    } else {
      console.log('' + i + ' ' + '\033[90m' + filename + '\033[39m');
    }
    if (++i == files.length) {
      read();
    } else {
      //递归
      file(i);
    }
  });
}
var read = function read() {
  console.log('')
  stdout.write('    \033[33mEnter your choice:  \033[39m')
  stdin.resume();
  //设置编码方式
  stdin.setEncoding('utf8');
  //监听data的事件 option为一个函数
  stdin.on('data',option);
}


var option = function option (data) {
  //把utf8编码的data字符串类型变为Number类型来做检查
  var filename = files[Number(data)];
  if (!filename) {
    stdout.write('\033[31m Please Enter your choice: \033[39m');
  } else {
    stdin.pause();
    if (stats[Number(data)].isDirectory()) {
      fs.readdir(__dirname + '/' + filename, 'utf8', function(err, files){
        console.log('');
        console.log(' (' + files.length + 'files)');
        files.forEach(function(file) {
          console.log('     - ' + file);
        });
        console.log('');
      });
    } else {
      fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data) {
        console.log('');
        console.log('\033[90m' + data.replace(/(.*)/g, '      $1') + '\033[39m');
        console.log('');
      });
    }
  }
};
  file(0);
});