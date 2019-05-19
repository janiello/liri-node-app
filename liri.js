require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var media = process.argv[3];

switch (command) {
    case "spotify-this-song":
        spotifyThisSong(media);
        break;
    case "movie-this":
        movieThis(media);
};

function spotifyThisSong(song) {
    spotify.search({type: "track", query: media, limit: 5}), function(error, response) {
            if (error) {
                return console.log("Error occurred: " + error);
            }
            console.log(response);
        }
};

var axios = require("axios");
var movie = "";
var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&apikey=" + keys.omdb;

function movieThis(film) {
    for (var m = 2; m < media.length; m++) {
        if (m > 2 && m < media.length) {
            movie = movie + "+" + media[m];
        } else {
            movie += media[m];
        }
    };
    axios.get(queryUrl).then(function(response) {
        console.log(response);
    });
};