var redis = require("redis");
var fs = require('fs');

var options = {
  "host": "thor-analytics-001.dwnzoe.0001.usw2.cache.amazonaws.com",
  "port": 6379
};

console.log('Creating Redis Client');
var client = redis.createClient(options.port, options.host);

client.on("error", function (err) {
    console.log("Error " + err);
});

client.on('connect', function() {
  console.log('Redis connect event');
});
 
// This will return a JavaScript String
var id = setInterval(function() {
  client.get('object49001', function(err, response) {
    if(err) {
      console.log('err' + err);
    }
    else {
      if(response !== null) {
        console.log('getTimeOnCorrectResult ' + Date.now());
        clearInterval(id);
      }
      else {
        console.log('getTimeOnInCorrectResult ' + Date.now());
        console.log('response on IncorrectResult' + response);
      }
    }
  });
 }, 1)
