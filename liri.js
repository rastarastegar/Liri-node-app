// Requesting the packages and access to key file

const nev = require ( "dotenv").config();
const keys = require ( "./keys");
const fs = require ("fs");
var Twitter = require('twitter'); // from npm instruction


// getting access to keys for spotify and twitter 
// const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);
const triologyomdbkey= "triology"

//Set defaults
var song = "The Sign by Ace of Base";
var movie = "Mr. Nobody";
var defaultMovieMessage = "If you haven't watched 'Mr. Nobody,' then you should:"


// ********Now functions*********

//Function that sends request to Twitter from npm instruction
function twitterRequest(){

    var params = {screen_name: 'Reza03583634', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
}
twitterRequest(); // Is this neccessary?


// // Spotify Request 
// function spotifyRequest(){



// var spotify = new Spotify({
//     id: <your spotify client id>,
//     secret: <your spotify client secret>
//   });
   
//   spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });

// }