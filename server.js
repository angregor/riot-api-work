var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(1337);
console.log('running on port 1337');
