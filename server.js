var express = require('express');
var app = express();
var path = require('path');
var https = require('https');
var mykey = "70ce1698-3e0d-42ce-a885-14d6da5cd691";
var lolapi = require('leagueapi');

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

app.listen(1337);
console.log('running on port 1337');
