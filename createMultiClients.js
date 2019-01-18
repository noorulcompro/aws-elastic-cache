var redis = require("redis");
var fs = require('fs');

var options = {
  "host": "test-redis.dwnzoe.ng.0001.usw2.cache.amazonaws.com",
  "port": 6379
};

var arrClients = [];

console.log('Creating Multiple Redis Clients');

var id = setInterval(function() {
  for(var i = 0; i<10; i++) {
    var client = redis.createClient(options.port, options.host);
    client.on("error", function (err) {
      console.log("Error " + err);
    });

    client.on('connect', function() {
//      console.log('Redis connect event');
    });

    client.on('ready', function() {
//      console.log('Redis ready event');
    });
    arrClients.push(client);
  }
  console.log('clients created : ' + arrClients.length);
 }, 100);
