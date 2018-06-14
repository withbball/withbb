var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', function (req, res) {
  res.send('Welcome To WithBB ...!');
});
app.get('/dynamic', function (req, res) {
  var lis='';
  for(var i=0;i<5;i++) {
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    Hello, Static program...!
    <ol>
      ${lis}
    </ol>
    ${time}
  </body>
  </html>`
  res.send(output);
});
app.get('/route', function (req, res) {
  res.send('Welcome To WithBB ..!, <img src="emo01.png">');
});
app.get('/login', function (req, res) {
  res.send('<h1>Login please !</h1>');
});

app.listen(3000, function () {
  console.log('Connect app listening on port 3000!');
});
