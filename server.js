var express = require('express');
var lolapi = require('leagueapi');
console.log("hello");
var app = express();
var path = require('path');
var port = process.env.PORT || 1337;
var https = require('https');
var mykey = //your key;

lolapi.init(mykey, 'na');

app.use(express.static(__dirname + '/client/homepage'));

app.get('/:name', function(req, res) {
  res.sendFile(__dirname + '/client/homepage/index.html');
})

app.post('/:name', function(req, res) {
  console.log(req.params.name);
  lolapi.Summoner.getByName(req.params.name, function(err, summoner) {
    console.log(summoner);
    res.json(summoner);
  })
});

app.post('/:name/:id', function(req, res) {
  console.log(req.params.id);
  lolapi.getLeagueEntryData(req.params.id, function(err, json) {
    console.log(json);
    res.json(json);
  })
});


app.get('/user/:name', function(req, res) {
  res.sendFile(__dirname + '/client/userpage/userpage.html');
});

app.listen(port);
console.log('running on port 1337');
