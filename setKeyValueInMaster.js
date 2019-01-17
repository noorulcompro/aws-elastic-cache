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
client.set('Anshika23', 'Srivastava23', function(err, response) {
  var setTime = Date.now();
  console.log('setTime' + setTime);
  if(err) {
    console.log('err' + err);
  }
  else {
    console.log('response' + response);
  }
});
