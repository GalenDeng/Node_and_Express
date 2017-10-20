require('http').createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'image/png'});
  var stream = require('fs').createReadStream('image.png');
  //数据一来到就读(数据块模式读取方式)
  stream.on('data',function(data){      
    res.write(data);
  });
  stream.on('end',function(){
    res.end();
  });
}).listen(3000);

//实际上是： 流(stream)文件系统(piping)------流(http.ServerResponse对象)的过程
//简化版
require('http').createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'image/png'});
  //通过管道到response中
  require('fs').createReadStream('image.png').pipe(res);
}).listen(3000);