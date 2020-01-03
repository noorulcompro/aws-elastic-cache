var redis = require("redis");
var async = require('async');
var fs = require('fs');
var Q = require("Q");

var options = {
  "host": "",
  "port": 0,
  "password": "" 
};

var client = redis.createClient(options.port, options.host);

function getAllKeys(pattern) {
  var deferred = Q.defer();

  client.keys(pattern, function(err, keys) {
    if(err) { deferred.reject(err); }
    else { deferred.resolve(keys); }
  });

  return deferred.promise;
}

function getAllData(keys) {
  var deferred = Q.defer();
  var result = {};

  async.eachOfLimit(keys, 20, function(key, idx, cb) {
    console.log(keys[idx]);
    client.hgetall(keys[idx], function(err, val) {
      result[keys[idx]] = val;
      cb();
    });
  }, function () {
    deferred.resolve(result);
  });

  return deferred.promise;  
}

function writeDataToFile(data) {
  var deferred = Q.defer();
  var fileName = './data-' + Date.now() + '.json';
  
  try {
    fs.writeFileSync(fileName, JSON.stringify(data))
    deferred.resolve(fileName);
  }
  catch(e) {
    console.log('error while writing data to file', err);
    deferred.reject(err);
  }

  return deferred.promise;   
}

getAllKeys('s:anal:dev1:*classrecord*items')
.then(getAllData)
.then(writeDataToFile)
.then(function(file) { console.log('data written successfully to file: ' + file); })
.catch(function(err) { console.log(err); });
