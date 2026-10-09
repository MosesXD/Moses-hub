// netlify/functions/now-playing.js
//
// Runs on Netlify's servers, not in the visitor's browser.
// The key and username come from Netlify's Environment variables, so
// NOTHING secret is written in this file. Set these two in Netlify:
//   LASTFM_API_KEY  = (your key from last.fm/api/account/create)
//   LASTFM_USER     = (your Last.fm username)

exports.handler = async () => {
  const apiKey = process.env.LASTFM_API_KEY;
  const user = process.env.LASTFM_USER;

  // If the two settings are missing, stop here (and never reveal details)
  if (!apiKey || !user) {
    return reply(500, { error: "Not set up yet" });
  }

  const url =
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks" +
