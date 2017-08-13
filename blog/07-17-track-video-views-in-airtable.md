# Quick Project: Tracking video views in Airtable
[Emergent Order](http://www.emergentorder.com) started life as a video production house. We’ve made award-winning [documentaries](http://www.attheforkfilm.com), television ads, [parody videos](www.artists4america.org/sharewars), mini-docs — oh, and [music videos](https://www.youtube.com/watch?v=GTQnarzmTOc) featuring rap battles between dead economists.

As our list of multi-million-view hits grows, it’s become increasingly cumbersome to  track exactly how many views EO content has gotten in aggregate — so, with the help of our favorite internal [database app](www.airtable.com), I decided to write a quick node.js script that aggregates our views for us.

```
// Pull API keys from the .env file
// Hooray 12-factor best practices :)
require('dotenv').config()

/* --------------------------
/* Initiate class libraries
/* --------------------------
/* Airtable
/* YouTube
/* jsonfile - for reading/writing json to datafiles
/* VideoId - for pulling video ids from urls
/* ------------------------- */

var Airtable = require('airtable')
var jsonfile = require('jsonfile')
var YouTube = require('youtube-node')
const getVideoId = require('get-video-id')

// Init YouTube object & authenticate
var youTube = new YouTube()
youTube.setKey(process.env.GOOGLE_API_KEY)

// Ignore: JSON storage for testing
var data = 'data/views.json'

// Blank array to hold our Video data
var videos = []

// Init our Airtable connection
var base = new Airtable({
        apiKey: process.env.AIRTABLE_API_KEY
    }).base('appjx8uwRv4srcesm');

// Grab our table from our Airtable Base
base('Placements').select({
    // maxRecords: 1,
    filterByFormula: "NOT({URL} = '')"
}).eachPage(function page(records, fetchNextPage) {

    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {

        // Get the video ID of each video & the last (manually added) Viewcount
        var video = getVideoId(record.get('URL'))
        var count = record.get('Viewcount')

        // Create an empty placeholder video variable
        var v = { video: video, views: count, newViews: '' }

        // If the video is YouTube (getVideoId returns NOT undefined)
        if (video) {

          // Ask the YouTube API for stats pretty plz
          youTube.getById(video['id'], function (error, result) {

            // If error, log it
            if (error) {
              console.log(error);
            } else {

              // If it's a YouTube playlist object, evaluate the first item in the list
              if (result.items.length > -1) {

                // Change ViewCount (a string) into a number for Airtable
                v.newViews = parseInt(result.items[0].statistics.viewCount)
                // Add to videos array
                videos.push(v)

                // Write to JSON file for debugging
                jsonfile.writeFile(data, videos, function(err) {
                    console.error(err)
                });

                // Update Airtable with new video count data
                base('Placements').update(record._rawJson.id, {
                  "NewViewcounts": v.newViews
                }, function(err, record) {
                    if (err) { console.error(err); return; }
                    console.log(record.get('Viewcount'));
                });

              } else {

                // Otherwise just get the stats for this video
                v.newViews = result.statistics.viewCount
                videos.push(v)

                // Update Airtable with new video count data
                base('Placements').update(record._rawJson.id, {
                  "NewViewcounts": v.newViews
                }, function(err, record) {
                    if (err) { console.error(err); return; }
                    console.log(record.get('Viewcount'));
                });
              }
            }
          })
        }
    });
    fetchNextPage();
});
```
