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

var arr = [];

for(var i =1; i<1000000; i++) {
 arr.push('object' + i);
}
 
// This will return a JavaScript String
client.del(arr, function(err, response) {
  if(err) {
    console.log('err' + err);
  }
  else {
    console.log('response ' + response);
  }
});
