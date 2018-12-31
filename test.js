var redis = require("redis");


var fs = require('fs');


//var _und = require('underscore');
var options = {
  "host": "test-redis.yaiwig.0001.use1.cache.amazonaws.com",
  "port": 6379
};
console.log('Creating Redis Client');
var client = redis.createClient(options.port, options.host, function() {
    console.log('222222222');
  
    client.set("foo_rand000000000000", "OK");
 
    // This will return a JavaScript String
    client.get("foo_rand000000000000", function (err, reply) {
    console.log(reply.toString()); // Will print `OK`
});
});
