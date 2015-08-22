var express = require('express');
var lolapi = require('leagueapi');

var app = express();
var path = require('path');
var port = process.env.PORT || 1337; //either use the port provided by process or default to 1337
var https = require('https');
//riot games api key
var mykey = "70ce1698-3e0d-42ce-a885-14d6da5cd691";
//create instance of lolapi using my api key
lolapi.init(mykey, 'na');
//sets the default set of files to use for the homepage
app.use(express.static(__dirname + '/client/homepage'));
//creates the route for GET requests on /'name'
app.get('/:name', function(req, res) {
  res.sendFile(__dirname + '/client/homepage/index.html');
})
//creates the route for POST requests on /'name'
app.post('/:name', function(req, res) {
  console.log(req.params.name);
  lolapi.Summoner.getByName(req.params.name, function(err, summoner) {
    console.log(summoner);
    res.json(summoner);
  })
});
//creates the route for POST requests on /'name'/'id'
app.post('/:name/:id', function(req, res) {
  console.log(req.params.id);
  lolapi.getLeagueEntryData(req.params.id, function(err, json) {
    console.log(json);
    res.json(json);
  })
});

//creates the route for GET requests on /user/'name'
app.get('/user/:name', function(req, res) {
  res.sendFile(__dirname + '/client/userpage/userpage.html');
});

app.listen(port);
console.log('running on port 1337');
