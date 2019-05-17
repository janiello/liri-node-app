require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var media = process.argv[3];

switch (command) {
    case "concert-this":
        concertThis();
        break;
}

var axios = require("axios");

function concertThis() {
    axios
    .get("https://rest.bandsintown.com/artists/" + media + "/events?app_id=codingbootcamp")
    .then(function(response) {
        console.log(response.data);
    });
};