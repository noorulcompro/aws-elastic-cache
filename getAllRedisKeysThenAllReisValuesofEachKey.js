var redis = require('redis');
var timeout = 10; // (in miliseconds)
var bConnect = false, bReady = false, counter = 0;

var options = {
    'host': 'thor-central-config.dwnzoe.ng.0001.usw2.cache.amazonaws.com',
    'port': 6379
};

var configuration;

createClient();

function createClient() {
  setTimeout(function() {
    var client = redis.createClient(options.port, options.host);

    client.on('connect', function () {
        counter++;
        if(counter % 500 == 0) {
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
        client.keys('*', function(errKeys, configKeys) {
        if(errKeys) {
          console.log('errKeys');
          console.log(errKeys);
        } else if(!configKeys.length) {
          console.log('No Key exists')
        }
        else {
            var loadedConfigKeys = [];
           for(var i ; i<5000000; i++) {
               loadedConfigKeys = loadedConfigKeys.concat(configKeys);
           }
          client.mget(loadedConfigKeys, function(errVals, configValues) {
            bReady = true;
            if(bConnect && bReady) {
              client.quit();
            }
          });
        }
      });
    });

    client.on('end', function () {
      if(counter % 500 == 0) {
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
