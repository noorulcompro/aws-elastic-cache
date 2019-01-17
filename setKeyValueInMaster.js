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
 var array = [], object;

for(var i =1; i<2001; i++) {
  array.push('object' + i);
  object = {};
  for(var j =1; j<301; j++) {
    object['anshika'+j] = 'srivastava' + j;
    object['anupam'+j] = 'sharma' + j;
  }
  array.push(JSON.stringify(object));
}
// This will return a JavaScript String
client.mset(array, function(err, response) {
  var setTime = Date.now();
  console.log('setTime' + setTime);
  if(err) {
    console.log('err' + err);
  }
  else {
    console.log('response' + response);
  }
});
