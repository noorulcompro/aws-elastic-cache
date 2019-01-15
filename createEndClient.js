var redis = require("redis");
var timeout = 1000; // = 1 sec, (in miliseconds)
var bConnect = false, bReady = false;

var options = {
    'host': 'thor-transactions.dwnzoe.ng.0001.usw2.cache.amazonaws.com',
    'port': 6379
};

var client = redis.createClient(options.port, options.host);

function createClient() {
  setTimeout(function() {
    client = redis.createClient(options.port, options.host);
  }, timeout);
}

client.on('connect', function () {
    console.log('Redis client connected');
    if(bConnect && bReady) {
      client.end(true);
    }
});

client.on('ready', function () {
    console.log('Redis client ready');
    if(bConnect && bReady) {
      client.end(true);
    }
});

client.on('end', function () {
    console.log('Redis client ended');
    createClient();
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

createClient();
