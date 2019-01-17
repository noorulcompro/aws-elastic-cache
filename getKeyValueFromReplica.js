var redis = require("redis");
var fs = require('fs');

var options = {
  "host": "thor-analytics-002.dwnzoe.0001.usw2.cache.amazonaws.com",
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
  client.get('90001', function(err, response) {
    if(err) {
      console.log('err' + err);
    }
    else {
      if(response === '90002') {
        var getTimeOnCorrectResult = Date.now();
        console.log('getTimeOnCorrectResult ' + getTimeOnCorrectResult);
        clearInterval(id);
      }
      else {
        var getTimeOnInCorrectResult = Date.now();
        console.log('getTimeOnInCorrectResult ' + getTimeOnInCorrectResult);
        console.log('response on IncorrectResult' + response);
      }
      console.log('response ' + response);
    }
  });
 }, 1)
