var express = require('express');
var app = express();
var itemRoutes = express.Router();
var Twit = require('twit')
// Require Item model in our routes module

// Defined store route
var T = new Twit({
    consumer_key:         '9k2ix36doX4vZGctoRfDVhK2K',
    consumer_secret:      'Y7hQIxfwLVgILZGie70bhfkGHiwfMqclE0qedgbwkkxZZC8R9O',
    access_token:         '1019525297891209217-WJ2vaNgPtsyBo6OsOYRMuomQxln85e',
    access_token_secret:  'qR0Yw9wfiKXOz4qlcf8sDbuP6V4cyJaEAQJVx6cwaq73y',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })
itemRoutes.route('/add').post(function (req, res) {
  console.log('router success');
  T.get('followers/ids', { screen_name: 'bchelsel' },  function (err, data, response) {
    console.log(data);
  })
});
module.exports = itemRoutes;