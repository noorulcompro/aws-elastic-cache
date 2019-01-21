var redis = require("redis");
var timeout = 500; // = 1 sec, (in miliseconds)
var counter = 0;

var options = {
    'host': 'test-redis.dwnzoe.ng.0001.usw2.cache.amazonaws.com',
    'port': 6379
};

var client = redis.createClient(options.port, options.host);

client.on('connect', function () {
    console.log('Redis client connected');
});

client.on('ready', function () {
    console.log('Redis client ready');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

var redisKey = 's:ballu:anupam';

client.get(redisKey, 'Sharma', function (error, result) {
    console.log('result');
    console.log(result);
});


console.log('GETting key - ' + redisKey);
setInterval(function() {
    counter++;
    client.get(redisKey, function (error, result) {
        if (error) {
          console.log("ERROR at getting-----");
          console.log(error);
        }
        else {
            if(counter % 2 == 0) { console.log('Value: ' + result); }
        }
    });
}, timeout);
