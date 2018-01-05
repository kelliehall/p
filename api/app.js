var http = require('http');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/nute', (req, res) => {
    res.send('stfu');
}).post('/nute', (req, res) => {
    res.send('post');
});

app.listen(3004, function () {
    console.log('hi');
});
