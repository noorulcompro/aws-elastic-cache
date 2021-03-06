var redis = require('redis');
var timeout = 10; // (in miliseconds)
var bConnect = false, bReady = false, counter = 0;

var options = {
    'host': 'thor-transactions.dwnzoe.ng.0001.usw2.cache.amazonaws.com',
    'port': 6379
};

createClient();

function createClient() {
  setTimeout(function() {
    var client = redis.createClient(options.port, options.host);

    client.on('connect', function () {
        counter++;
        if(counter % 50 == 0) {
            console.log('Redis client connected');
        }
        bConnect = true;
        if(bConnect && bReady) {
          client.end(true);
        }
    });

    client.on('ready', function () {
        if(counter % 500 == 0) {
            console.log('Redis client ready');
        }
        bReady = true;
        if(bConnect && bReady) {
          client.quit();
        }
    });

    client.on('end', function () {
      if(counter % 50 == 0) {
        console.log('Redis client ended');
      }
      client = undefined;
      bConnect = false;
      bReady = false;
      createClient();
    });

    client.on('error', function (err) {
        console.log('Error:');
        console.log(JSON.stringify(err, 0, 4));
    });
  }, timeout);
}
