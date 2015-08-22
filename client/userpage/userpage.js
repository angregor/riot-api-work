$(document).ready(function() {
  var url = document.URL;
  console.log(url);
  var myname = url.substring(27, url.length).toLowerCase();
  console.log(myname);
  //look up summoner based on name
  $.ajax({
    url: "/" + myname,
    type: 'POST',
    dataType: 'json',
    data: {

    },
    success: function (summoner) {
      console.log("got summoner");
      console.log(summoner);
      var name = summoner[myname].name.toString();
      var level = summoner[myname].summonerLevel.toString();
      var id = summoner[myname].id.toString();
      var profileicon = summoner[myname].profileIconId.toString();
      var iconsrc = "http://ddragon.leagueoflegends.com/cdn/5.2.1/img/profileicon/" + profileicon +".png";
      //empty previous name
      $('#summonernametext').empty();
      //set the icon image attributes
      $('#profileicon').attr('src', iconsrc);
      $('#profileicon').attr('width', 50);
      $('#profileicon').attr('length', 50);
      //set the name and level
      $('#summonernametext').append("    " + name);
      $('#summonerlevelid').text(level);
      //now look up ranked info
      $.ajax({
        url: "/" + myname + "/" + id,
        type: 'POST',
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
})
function getSummoner() {
  var myname = $("#username").val().toLowerCase();
  console.log(myname);
  //look up summoner based on name
  $.ajax({
    url: "/" + myname,
    type: 'POST',
    dataType: 'json',
    data: {

    },
    success: function (summoner) {
      console.log("got summoner");
      console.log(summoner);
      var name = summoner[myname].name.toString();
      var level = summoner[myname].summonerLevel.toString();
      var id = summoner[myname].id.toString();
      var profileicon = summoner[myname].profileIconId.toString();
      var iconsrc = "http://ddragon.leagueoflegends.com/cdn/5.2.1/img/profileicon/" + profileicon +".png";
      //empty previous name
      $('#summonernametext').empty();
      //set the icon image attributes
      $('#profileicon').attr('src', iconsrc);
      $('#profileicon').attr('width', 50);
      $('#profileicon').attr('length', 50);
      //set the name and level
      $('#summonernametext').append("    " + name);
      $('#summonerlevelid').text(level);
      //now look up ranked info
      $.ajax({
        url: "/" + myname + "/" + id,
        type: 'POST',
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
