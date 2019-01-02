var redis = require("redis");

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
var redisKey = Math.floor((Math.random() * 10000000) + 1);
console.log(redisKey);
client.setex("Noor", "ali", 30 function(res, err) {
  console.log('res');
  console.log(res);
  console.log('err');
  console.log(err);
});
