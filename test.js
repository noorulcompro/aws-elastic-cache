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
  
client.hset("foo_rand000000000000", "key", "value", function(a, b) { console.log(a); console.log(b); });
 
// This will return a JavaScript String
client.get("foo_rand000000000000", function (err, reply) {
  console.log(reply.toString()); // Will print `OK`
});
