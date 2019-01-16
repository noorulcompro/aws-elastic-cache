var redis = require("redis");
var timeout = 5; // = 1 sec, (in miliseconds)
var counter = 0;

var options = {
    'host': 'thor-transactions.dwnzoe.ng.0001.usw2.cache.amazonaws.com',
    'port': 6379
};

var client = redis.createClient(options.port, options.host);

client.on('connect', function () {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});


console.log('GETting value--key - test-key-1');
setInterval(function() {
    counter++;
    client.set(['test-key-1' + counter, 'test-value-10101' +counter], function (error, result) {
        if (error) {
            console.log(error);
            throw error;
        }
        console.log('SET(only once) key --- ' + result);
    });
    client.get('test-key-1' + counter, function (error, result) {
        if (error) {
          console.log("ERROR at getting-----");
          console.log(error);
        }
        else {
            if(counter % 5000 == 0) { console.log('Running Succesfully...'); }
        }
    });
    client.delete('test-key-1' + counter, function (error, result) {
        if (error) {
          console.log("ERROR at getting-----");
          console.log(error);
        }
    });
}, timeout);
