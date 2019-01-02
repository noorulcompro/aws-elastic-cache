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
client.setex("Noor", 30, "ali", function(err, res) {
  console.log('res0');
  console.log(res)
  ttlFunction();
  function ttlFunction() {
    client.ttl("Noor",function(err, res) {
      console.log('res1');
      console.log(res)
      client.get("Noor",function(err, res) {
       console.log('res2');
       console.log(res);
       setTimeout(ttlFunction, 5000);
      });
    });
  } 
});
