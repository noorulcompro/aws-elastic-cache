var redis = require("redis");


var fs = require('fs');


//var _und = require('underscore');
var options = {
  "host": "test-redis.yaiwig.0001.use1.cache.amazonaws.com",
  "port": 6379
};
console.log('Creating Redis Client');
var client = redis.createClient(options.port, options.host);

client.on("error", function (err) {
    console.log("Error " + err);
});
var redisKey = 'a' + Math.random();
console.log(redisKey);
client.hset(redisKey, "key", "value", function(a, b) {
  console.log('a');
  console.log(a);
  console.log('b');
  console.log(b);
});
 
// This will return a JavaScript String
client.get(redisKey, function (err, reply) {
  console.log('Getting Redis Key');
  console.log(err);
  console.log(reply);
});
