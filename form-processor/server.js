require('http').createServer(function(req,res) {
    if ('/' == req.url) {
    res.writeHead(200,{'Content-Type':'text/html'});
    //把响应文本内容写在一个数组中，再用数组的join方法将其转为字符串
    res.end([
        '<form method = "POST" action="/url">',
        '<h1>My form</h1>',
        '<fieldset>',
        '<label>Personal information</label>',
        '<p>What is your name?</p>',
        '<input type="text" name="name">',
        //按钮
        '<p><button>Submit</button></p>',
        '</form>'
    ].join(''));  
  } else if ('/url' == req.url) {
      res.writeHead(200, {'Content-Type':'text/html'});
      res.end('You sent a  <em>' + req.method + '</em> request');
  }
}).listen(3000);