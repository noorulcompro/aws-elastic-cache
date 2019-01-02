var redis = require("redis");
var fs = require('fs');

var options = {
  "host": "test-redis-replica.yaiwig.ng.0001.use1.cache.amazonaws.com",
  "port": 6379
};

console.log('Creating Redis Client');
var client = redis.createClient(options.port, options.host);

client.on("error", function (err) {
    console.log("Error " + err);
});

var redisKey = 'a-*';
console.log(redisKey);
 
// This will return a JavaScript String
client.keys(redisKey, function(err, keys) {
  console.log('Getting Redis Key');
  console.log(err);
  console.log(keys);
  if(!err) {
    client.mget(keys, function(errVals, values) {
      console.log('Getting Redis Values');
      console.log(err);
      console.log(values);
    });
  }
});
