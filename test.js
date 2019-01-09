var redis = require("redis");


var fs = require('fs');


//var _und = require('underscore');
var options = {
  "host": "thor-analytics.dwnzoe.ng.0001.usw2.cache.amazonaws.com",
  "port": 6379
};
console.log('Creating Redis Client');
var client = redis.createClient(options.port, options.host);

client.on("error", function (err) {
    console.log("Error " + err);
});
var redisKey = 'a-' + Math.floor((Math.random() * 10000000) + 1);
console.log(redisKey);

client.multi()
.hgetall('s:anal:aberystwyth-thor:analytics:user:02e7ff93-132f-11e9-bd08-0242ac110003:product:2b8eb4a8-f868-11e8-aaf8-0242ac110003:standard')
.hgetall('s:anal:aberystwyth-thor:classrecord:product:2b8eb4a8-f868-11e8-aaf8-0242ac110003:class:03b2680f-12f2-11e9-bd08-0242ac110003:pendingsubmissions')
.hgetall('s:anal:aberystwyth-thor:classrecord:product:2b8eb4a8-f868-11e8-aaf8-0242ac110003:class:7be7d21a-1229-11e9-bd08-0242ac110003:users')
.exec(function(err, data) {
    console.log(JSON.stringify(data, 0, 4));
  })
);

/*
client.hset(redisKey, "name", "redis-test", function(err, res) {
  console.log('errSET');
  console.log(err);
  console.log('resSET');
  console.log(res);
});
 
// This will return a JavaScript String
client.hgetall(redisKey, function (err, res) {
  console.log('Getting Redis Key');
  console.log('errGET');
  console.log(err);
  console.log('resGET');
  console.log(res);
});
*/
