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