function getSummoner() {
  var mykey = //enter your key here
  var myname = $("#username").val().toLowerCase();
  var summonercall = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+ myname +"?api_key=" + mykey;

  console.log(myname);
  //look up summoner based on name
  $.ajax({
    url: "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+ myname +"?api_key=" + mykey;,
    type: 'GET',
    dataType: 'json',
    data: {

    },
    success: function (summoner) {
      console.log("got summoner");
      console.log(summoner);
      var name = summoner[myname].name.toString();
      var level = summoner[myname].summonerLevel.toString();
      var id = summoner[myname].id.toString();
      $('#summonernameid').text(name);
      $('#summonerlevelid').text(level);
      //now look up ranked info
      $.ajax({
        url: "https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/" + id + "/entry?api_key=" + mykey;,
        type: 'GET',
        dataType: 'json',
        data: {

        },
        success: function (summoner) {
          var league = summoner[id][0].entries[0].division;
          var leaguepoints = summoner[id][0].entries[0].leaguePoints.toString();
          var tier = summoner[id][0].tier.toString();
          var rank = tier + " " + league + ": " + leaguepoints + "LP";
          console.log(tier);
          $('#summonerrankid').text(rank);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          alert("error getting ranked info");
          $('#summonerrankid').text("Unranked!");
        }

      });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest);
      alert("error getting summoner");
      console.log(textStatus);
    }
  });
}
