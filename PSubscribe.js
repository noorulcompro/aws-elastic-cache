var redis = require("redis");

var options = {
  "host": "test-redis.yaiwig.0001.use1.cache.amazonaws.com",
  "port": 6379
};
console.log('Creating Redis Client');
var pub = redis.createClient(options.port, options.host);

pub.config('SET', 'notify-keyspace-events', 'K$');

    // REDIS Events
    pub.on('connect', function() {
     console.log('connected');
    });

    pub.on('ready', function() {
      console.log('ready');
    });


    pub.on('disconnected', function(err) {
      console.log('disconnected' + err);
    });

    pub.on('error', function(err) {
      console.log('error' + err);
    });

    pub.on('end', function(err) {
      console.log('error' + err);
    });

    pub.on('pmessage', function() {
      console.log('pMessage received');
    });

    pub.psubscribe('*');

