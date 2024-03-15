
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
  target: 'http://127.0.0.1:6061/'
}));
console.log('start port: ' + 6060)
app.listen(6060)