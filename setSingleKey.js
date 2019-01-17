var redis = require("redis");
var fs = require('fs');

var options = {
  "host": "thor-transactions-001.dwnzoe.0001.usw2.cache.amazonaws.com",
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

client.on('ready', function() {
  console.log('Redis ready event');
});

var redisKey = 's:ballu:anupam';
console.log(redisKey);
 
client.set(redisKey, function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
  
