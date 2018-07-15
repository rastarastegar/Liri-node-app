// Requesting the packages and access to key file

const nev = require("dotenv").config();
const keys = require("./keys");
const fs = require("fs");
const Spotify = require('node-spotify-api');
const Twitter = require('twitter'); // from npm instruction
const request = require("request");


// getting access to keys for spotify and twitter 
// const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);
const triologyomdbkey = "triology"

//Set defaults
var song = "The Sign by Ace of Base";
var movieName = "Mr. Nobody";
var defaultMovieMessage = "If you haven't watched 'Mr. Nobody,' then you should:"

// ********Now functions*********

//Twitter Request Function
function twitterRequest() {

    var params = { screen_name: 'Reza03583634', count: 20 };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            tweets.forEach(function (element) {
                console.log(element.text);
            });
        }
    });
}
twitterRequest();               // Is this neccessary? (yes it is)

// Spotify Request Function
function spotifyRequest() {

    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log("*************this is parse**********")
        // console.log(JSON.parse(data));
        console.log("*************this is stringify**********")
        // console.log(JSON.stringify(data, null, 2));
        data.tracks.items.forEach(function (element) {
            console.log("*************Song's Name**********")
            console.log(element.name);

            console.log("*************Artists Name**********")
            element.artists.forEach(function (element) {
                console.log(element.name + "    ")

            })

            console.log("*************Song's URL**********")
            console.log(element.external_urls.spotify + "\n----------");

        })

    });
}
spotifyRequest();


// Movie Request Function
function movieRequest(movieName) {
    const queryUrl = "https://www.omdbapi.com/?apikey=" + triologyomdbkey + "&plot=short&y=&tomatoes=&t=" + movieName;

    request(queryUrl, function (error, response, body) {

        if (!error && response.statusCode === 200) {

            console.log("----------Movie Information----------" +
                "\n  Title: " + JSON.parse(body).Title +
                "\n  Actors: " + JSON.parse(body).Actors +
                "\n  Release Year: " + JSON.parse(body).Year +
                "\n  Language: " + JSON.parse(body).Language +
                "\n  Rated: " + JSON.parse(body).Rated +
                "\n  Country: " + JSON.parse(body).Country +
                "\n  plot: " + JSON.parse(body).Plot)
        } else {
            console.log(error);
            console.log(response.statusCode);
        }
    })
}

movieRequest(movieName);

// const request = process.argv[2];

// switch (request) {
//     case "spotify-this-song":
//         spotifyRequest();
//         break;
//     case "movie-this":
//         movieRequest();
//         break;
//     case "my-tweets":
//         twitterRequest();
//         break;
//     case "do-what-it-says":
//         randomRequest();
// };