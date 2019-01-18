var redis = require("redis");
var fs = require('fs');

var options = {
  "host": "thor-analytics.dwnzoe.ng.0001.usw2.cache.amazonaws.com",
  "port": 6379
};

var counter = 0;

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

var redisKey = 's:anal:aberystwyth-thor:analytics:user:be742a75-1494-11e9-808a-0242ac110003:product:2b8eb4a8-f868-11e8-aaf8-0242ac110003:standard';
console.log(redisKey);
 


  client.hgetall(redisKey, function(err, response) {
    if(err) {
      console.log(err);
    } else {
      console.log('Response timing: ' + Date.now());
      console.log(response);
    }
  });
  

