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
  
client.hset("redis-key-2", "key", "value", function(a, b) { console.log(a); console.log(b); });
 
// This will return a JavaScript String
client.get("redis-key-2", function (err, reply) {
  console.log('Getting Redis Key');
  console.log(reply.toString()); // Will print `OK`
});
