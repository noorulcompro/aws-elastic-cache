var redis = require('redis');
var timeout = 100; // = 1 sec, (in miliseconds)
var bConnect = false, bReady = false;

var options = {
    'host': 'thor-transactions.dwnzoe.ng.0001.usw2.cache.amazonaws.com',
    'port': 6379
};

createClient();

function createClient() {
  setTimeout(function() {
    var client = redis.createClient(options.port, options.host);

    client.on('connect', function () {
        console.log('Redis client connected');
        bConnect = true;
        if(bConnect && bReady) {
          client.end(true);
        }
    });

    client.on('ready', function () {
        console.log('Redis client ready');
        bReady = true;
        if(bConnect && bReady) {
          client.quit();
        }
    });

    client.on('end', function () {
      console.log('Redis client ended');
      client = undefined;
      bConnect = false;
      bReady = false;
      createClient();
    });

    client.on('error', function (err) {
        console.log('Something went wrong ' + err);
    });
  }, timeout);
}
