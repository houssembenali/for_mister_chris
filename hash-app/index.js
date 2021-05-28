const express = require('express')
const app = express()
const md5 = require('md5');


app.get('/md5/:txt', function (req, res) {
  res.send('Hello World');
  var txt = req.params.txt;
  
  res.send(md5(txt))
});


app.get('/sha256/:txt",', function (req, res) {
  res.send('Hello World');
  var txt = req.params.txt;
  res.send(sha256(txt))
});
 
app.listen(3000)