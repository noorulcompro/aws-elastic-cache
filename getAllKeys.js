var redis = require("redis");
var fs = require('fs');

var options = {
  "host": "thor-user-tokens.dwnzoe.ng.0001.usw2.cache.amazonaws.com",
  "port": 6379
};

console.log('Creating Redis Client');
var client = redis.createClient(options.port, options.host);
if(options.password) {
  client.auth(options.password, function(err) {
      if(err) {
        console.log(err, { stats: 'count#redis.' + host + '~~' + type + '.connection.failed=1' },
         'Error while Authenticating to Redis Server for ' + type);
      }
    });
}

client.on("error", function (err) {
    console.log("Error " + err);
});

client.on('connect', function() {
  console.log('Redis connect event');
});

var redisKey = '*';
console.log(redisKey);
 
// This will return a JavaScript String
client.keys(redisKey, function(err, keys) {
  console.log('Getting Redis Key');
  console.log(err);
  console.log(keys);
  if(!err) {
    for(var i in keys) {
      client.hgetall(keys[i], function(errVals, values) {
        console.log('Getting Redis Values');
        console.log(err);
        console.log(values);
      });
    }
  }
});
