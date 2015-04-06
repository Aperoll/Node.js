var https = require("https");
https.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/AppleCrisps?[API_KEY]", function(response) {
  console.log(response.statusCode);
});
