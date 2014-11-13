var express = require('express');
require('http');

var app = express();
var port = 3000;

app.listen( port );

console.log( __dirname );

app.use('/', express.static( __dirname + '/../app' ));

console.log('listening to PORT: ', port);