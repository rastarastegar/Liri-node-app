// Requesting the packages and access to key file

const nev = require("dotenv").config();
const keys = require("./keys");
const fs = require("fs");
const Spotify = require('node-spotify-api');
const Twitter = require('twitter'); // from npm instruction


// getting access to keys for spotify and twitter 
// const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);
const triologyomdbkey = "triology"

//Set defaults
var song = "The Sign by Ace of Base";
var movie = "Mr. Nobody";
var defaultMovieMessage = "If you haven't watched 'Mr. Nobody,' then you should:"


// ********Now functions*********

//Function that sends request to Twitter from npm instruction
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
twitterRequest(); // Is this neccessary? (yes it is)



// Spotify Request 
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