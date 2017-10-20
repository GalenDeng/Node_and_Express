//这里的  res.writeHead(200)没有指定渲染的文本格式，默认为text/plain,浏览器以此格式显示res.end()的内容
require('http').createServer(function(req,res) {
  res.writeHead(200);
  res.end('hello <b>World</b>');
}).listen(3000)

//text/html渲染
require('http').createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('hello <b>World</b>');
}).listen(3000)