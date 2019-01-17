var redis = require("redis");
var fs = require('fs');

var options = {
  "host": "thor-analytics.dwnzoe.ng.0001.usw2.cache.amazonaws.com",
  "port": 6379
};

var arrClients = [];

console.log('Creating Redis Client');
for(var i =0; i<10; i++) {
 var client = redis.createClient(options.port, options.host);
 client.on("error", function (err) {
   console.log("Error " + err);
  });

  client.on('connect', function() {
    console.log('Redis connect event');
  });
 arrClients.push(client);
}

var id = setInterval(function() {
 arrClients.forEach(function(client) {
    client.get('object49001', function(err, response) {
      if(err) {
        console.log('err' + err);
      }
      else {
        if(response !== null) {
          console.log('getTimeOnCorrectResult ' + Date.now());
          clearInterval(id);
        }
        else {
          console.log('getTimeOnInCorrectResult ' + Date.now());
          console.log('response on IncorrectResult' + response);
        }
      }
    });
   })
 }, 1)
