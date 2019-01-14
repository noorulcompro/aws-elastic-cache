var redis = require("redis");
var timeout = 50; // = 1 sec, (in miliseconds)

var options = {
    'host': 'redis-10010.c12.us-east-1-4.ec2.cloud.redislabs.com',
    'port': 10010,
	'password': 'comprodls'
};

var client = redis.createClient(options.port, {
		'host': options.host,
		'password': options.password
});

client.on('connect', function () {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

client.set(['test-key-1', 'test-value-10101'], function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('SET(only once) key --- ' + result);
});


console.log('GET value-- ' + JSON.stringify(result));
setInterval(function() {
    client.get('test-key-1', function (error, result) {
        if (error) {
          console.log("ERROR at getting-----");
          console.log(error);
        }
    });
}, timeout);
