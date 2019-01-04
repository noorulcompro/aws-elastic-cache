var redis = require("redis");

var options = {
  "host": "test-redis-replica.yaiwig.ng.0001.use1.cache.amazonaws.com",
  "port": 6379
};
console.log('Creating Redis Client');
var pub = redis.createClient(options.port, options.host);
var client = redis.createClient(options.port, options.host);


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


client.on('connect', function() {
 console.log('connected');
});

client.on('ready', function() {
  console.log('ready');
});


client.on('disconnected', function(err) {
  console.log('disconnected' + err);
});

client.on('error', function(err) {
  console.log('error' + err);
});

client.setex('Nitish', 10, "Raturi", function(err, res) {
  console.log('errSET');
  console.log(err);
  console.log('resSET');
  console.log(res);
});

pub.on('end', function(err) {
  console.log('error' + err);
});

pub.on('pmessage', function(err, res, value) {
  console.log('err');
  console.log(err);
  console.log('res');
  console.log(res);
  console.log('value');
  console.log(value);
  console.log('pMessage received');
});

pub.psubscribe('*');

