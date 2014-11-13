var express = require('express');

var app = express();
var port = 3000;

app.listen( port );

// express.static is Built-in middleware and
// is based on serve-static, and is responsible for serving the static assets of an Express application.
// The root argument refers to the root directory from which the static assets are to be served.
// The optional options object can have the following properties.
app.use('/', express.static( __dirname + '/../app' ));

console.log('listening to PORT: ', port);