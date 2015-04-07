function printMessage(name, summonerLevel, id) {
  var messageName = "Summoner Name: " + name;
  var messageLevel = "Summoner Level: " + summonerLevel;
  var messageId = "Summoner ID: " + id;
  console.log(messageName);
  console.log(messageLevel);
  console.log(messageId);
}

var https = require("https");
var request = https.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/AppleCrisps?[API_KEY]", function(response) {
var body = "";
  
  response.on("data", function(chunk) {
    body += chunk;
    });
  response.on("end", function(){
    var profile = JSON.parse(body);
    printMessage(profile.applecrisps.name, profile.applecrisps.summonerLevel, profile.applecrisps.id)
  });
});

request.on("error", function(error) {
  console.error(error.message);
});

