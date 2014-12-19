var express = require('express');
var data = require('./data.js');

var app = express();
var port = 3000;

app.listen( port );

// express.static is Built-in middleware and
// is based on serve-static, and is responsible for serving the static assets of an Express application.
// The root argument refers to the root directory from which the static assets are to be served.
// The optional options object can have the following properties.
app.use('/', express.static( __dirname + '/../app' ));

app.get('/auth/login', function( req, res ){
    console.log('inside auth/login');
    var validUsers = {'Armando Perez': 1, 'Tyron': 2};
    // TODO: Make sure im sending the correct status code
    if( req.param('name') in validUsers ) res.send( {id: validUsers[req.param('name')]} );
    // TODO: When auth fails (when the name is not in validUser) send correct
    //          error status code and and anthing else that should be sent
    else res.status(400).send( req.param('name') );
});


app.get( '/api/inbox/:userName', function( req, res ) {
    // TODO: DB query for all inbox emails based on username
    console.log( 'req.query', req.query );
    console.log( 'req.params', req.params );
    // C: Both assignments below work hower req.params
    //      checks more req properties for 'userName'
    // var userName = req.params.userName;
    var userName = req.param('userName');
    console.log( "req.param('userName')", userName );
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