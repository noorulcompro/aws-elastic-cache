var redis = require("redis");


var fs = require('fs');


//var _und = require('underscore');
var options = {
  "host": "cluster-testing-0001-001.yaiwig.0001.use1.cache.amazonaws.com",
  "port": 6379
};
console.log('Creating Redis Client');
var client = redis.createClient(options.port, options.host);

client.on("error", function (err) {
    console.log("Error " + err);
});
var redisKey = 'a-' + Math.floor((Math.random() * 10000000) + 1);
console.log(redisKey);
client.hset(redisKey, "name", "redis-test", function(err, res) {
  console.log('err');
  console.log(err);
  console.log('res');
  console.log(res);
});
 
// This will return a JavaScript String
client.hgetall(redisKey, function (err, res) {
  console.log('Getting Redis Key');
  console.log('err');
  console.log(err);
  console.log('res');
  console.log(res);
});
