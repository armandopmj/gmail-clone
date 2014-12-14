var express = require('express');

var app = express();
var port = 3000;

app.listen( port );

// express.static is Built-in middleware and
// is based on serve-static, and is responsible for serving the static assets of an Express application.
// The root argument refers to the root directory from which the static assets are to be served.
// The optional options object can have the following properties.
app.use('/', express.static( __dirname + '/../app' ));

app.get( '/api/inbox', function( req, res ) {
    //Do DB query for all inbox emails based on username
    console.log( 'inside inbox' );
    var date = new Date();
    var messages = [
        {
            'subject': 'Hey!!',
            'body': 'what is up!!',
            'date': date,
            'labels': ['inbox']
        },
        {
            'subject': 'Hey2!!',
            'body': 'dude this is your second message!!',
            'date': date,
            'labels': ['inbox', 'favorites']
        }
    ];
    // Q: Find out if messages is automatically stringified
    //      as it is sent over without any issues
    res.send( messages );
} )
console.log('listening to PORT: ', port);