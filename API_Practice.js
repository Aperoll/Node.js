var https = require("https");
https.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/AppleCrisps?api_key=20190fb1-47f3-4d18-a8c4-cf768cabba44", function(response) {
  console.log(response.statusCode);
});
