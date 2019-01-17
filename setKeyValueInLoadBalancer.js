var redis = require("redis");
var fs = require('fs');

var options = {
  "host": "thor-analytics.dwnzoe.ng.0001.usw2.cache.amazonaws.com",
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
 var array = [], object;

for(var i =40001; i<50001; i++) {
  array.push('object' + i);
  object = {};
  for(var j =1; j<301; j++) {
    object['anshika'+j] = 'srivastava' + j;
    object['anupam'+j] = 'sharma' + j;
  }
  array.push(JSON.stringify(object));
}
console.log('setStartTime' + Date.now());
// This will return a JavaScript String
client.mset(array, function(err, response) {
  console.log('setCompleteTime' + Date.now());
  if(err) {
    console.log('err' + err);
  }
  else {
    console.log('response' + response);
  }
});
