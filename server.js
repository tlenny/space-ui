
console.log('start...')

var express = require('express');
var app = express();
var path = require('path');


const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(express.static(path.join(__dirname, "")))
app.get('/',function(req, resp){
	resp.send(__dirname + "/index.html")
})

app.use('/q7', createProxyMiddleware({
  target: 'http://127.0.0.1:8022/'
}));
console.log('start port: ' + 8066)
app.listen(8066)