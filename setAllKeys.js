var redis = require("redis");
var fs = require('fs');

var options = {
  "host": "thor-central-config.dwnzoe.ng.0001.usw2.cache.amazonaws.com",
  "port": 6379
};

console.log('Creating Redis Client');
var client = redis.createClient(options.port, options.host);
if(options.password) {
  client.auth(options.password, function(err) {
      if(err) {
        console.log(err, { stats: 'count#redis.' + host + '~~' + type + '.connection.failed=1' },
         'Error while Authenticating to Redis Server for ' + type);
      }
    });
}

client.on("error", function (err) {
    console.log("Error " + err);
});

client.on('connect', function() {
  console.log('Redis connect event');
});

var redisKey = '*';
console.log(redisKey);
 
// This will return a JavaScript String
var config = {
  "service.baas.thor1": {
    "host": "http://internal-dls-asgard-thor-ug-194745401.us-west-2.elb.amazonaws.com",
    "version": "2.20"
  },
  "service.timeseries.thor1": {
    "host": "http://internal-dls-asgard-thor-kairos-860998643.us-west-2.elb.amazonaws.com",
    "port": 80
  },
  "service.mq.thor1": {
    "user": "a3cb5d1c3a20a8e687a26d222ede5a8d2823922fd7faed93651e0e4050bd2d0c",
    "pass": "6d9341127bbce812c541167cbc8481d1",
    "server": ["sharp-dalmatian.in.cloudamqp.com"],
    "port": 5672,
    "protocol": "amqp://",
    "vhost": "main"
  },
  "service.redis.core.thor1": {
    "host": "redis-19471.c13.us-west-2-mz.ec2.cloud.redislabs.com",
    "port": 19471,
    "password": "65ad4bfb932115c25378f2ef7d0943e01190be9cbae7fe3e825e99ea55f8377aba05a9345ff56016620fdb0aba42c4f0"
  },
  "service.redis.auth.thor1": {
    "host": "redis-11960.c13.us-west-2-mz.ec2.cloud.redislabs.com",
    "port": 11960,
    "password": "9950da16bee21c908f6607ebd485f9eb56d92b588b0a5e6e12c256b000523482bfc61fa64b7b41be69b10a2318e3b958"
  },
  "service.redis.transactions.thor1": {
    "host": "redis-11343.c113.us-west-2-mz.ec2.cloud.redislabs.com",
    "port": 11343,
    "password": "b4d795724d9d90986aaedc59903c2701ae02a6db1f011ed0927f6e96b04bf0d8f006bf37967cbbdc46264dc9bfbf9145"
  },
  "service.redis.analytic.thor1": {
    "host": "redis-19026.c113.us-west-2-mz.ec2.cloud.redislabs.com",
    "port": 19026,
    "password": "488a754ff9f3701ab3ed51545705468a8dbf7763e4990f3263228ff7d25a853f87062cc3aaec9cead27c27e44d25286e"
  },
  "service.redis.analytic-meta.thor1": {
    "host": "redis-19182.c1.us-west-2-2.ec2.cloud.redislabs.com",
    "port": 19182,
    "password": "09bd9e738f4eb673f94c90f31fdddcf7e6fd7f396ee31dc3b29752f834d84cae6690ebd16f9ce99497f140f686c0028c"
  },
  "service.redis.cross-org-data.thor1": {
    "host":"redis-11609.c13.us-west-2-mz.ec2.cloud.redislabs.com",
	  "port":11609,
    "password":"a2c98e37ca14023a9d58c345b30a5cc54a419b42a1fcfce6137f57f7594eb11d1dd5c6d8f6a5e4d4c69e4b32b970432a"
  },
  "service.s3.products.thor1": {
    "accessKeyId": "dc5dd9dbcfaff6031f5488543a76efa1c0d6a0c63c687932b5bd458a3841bb93",
    "secretAccessKey": "60da97c5c833f70f97f7a053a15c0b2b89e640bd69fd05f85146c42ecfcb051540ef7647e56e36caf7c97e74c8cc7ea8",
    "bucket": "dls-asgard-thor-product-versions-1",
    "cdn_base_url": "https://asgard-thor-content.comprodls.com"
  },
  "service.s3.userdata.thor1": {
    "accessKeyId": "054a7b2a9b5ae065b5edcabb5e299e31f7919a0dab7734bd3cb9dba27b9aa56f",
    "secretAccessKey": "d2e21f00462d4839271ae00b11c8bb331fe0118a6b9a119224ddc81a341114d959e5750a508d63ef0cb7f7a4dea2ea0f",
    "bucket": "dls-asgard-thor-user-data",
    "cdn_base_url": "https://asgard-thor-content.comprodls.com"
  },
  "service.push.thor1": {
    "publishKey": "b6635923244b066969413cabc7070aa26b8af22e26310df50a3e784369579f32e93b69859f3acb2dd107ef1049f08a97",
    "subscribeKey": "08a5cc49a875b580b4d865d353ce232f469778b016ac76a8735985071668dd84699c6aaa19c481917a2b6d92d3c5bad5",
    "secretKey": "ec96b2944cbeb184e83a3c4b888adad5c2c35c1fdeab41ae7810b8460a998cf3dc9fabf087300b8a3032b061d49b8699436a2d56328ea66dfcdfcbe5774e2f26"
  },
  "thor.org": ["aberystwyth-thor", "builder-thor-pub1", "builder-thor-qa", "builder-thor-stg", "dev-test1-thor", "dev-test2-thor", "helsinki-thor", "integ-test1-thor", "integ-test2-thor", "sh_thor_cup1_1", "sh_thor_cup1_2", "sh_thor_cup1_3", "sh_thor_cup1_4", "sh_thor_cup1_5", "unit-test1-thor"],
  "default.service.baas": {
    "thor": "service.baas.thor1"
  },
  "default.service.timeseries": {
    "thor": "service.timeseries.thor1"
  },
  "default.service.mq": {
    "thor": "service.mq.thor1"
  },
  "default.service.redis.core": {
    "thor": "service.redis.core.thor1"
  },
  "default.service.redis.auth": {
    "thor": "service.redis.auth.thor1"
  },
  "default.service.redis.transactions": {
    "thor": "service.redis.transactions.thor1"
  },
  "default.service.redis.analytic": {
    "thor": "service.redis.analytic.thor1"
  },
  "default.service.redis.analytic_meta": {
    "thor": "service.redis.analytic-meta.thor1"
  },
  "default.service.redis.cross_org_data": {
    "thor": "service.redis.cross-org-data.thor1"
  },
  "default.service.s3": {
    "thor": "service.s3.products.thor1"
  },
  "default.service.s3_userdata": {
    "thor": "service.s3.userdata.thor1"
  },
  "default.service.push": {
    "thor": "service.push.thor1"
  },
  "default.setting.type": {
    "thor": "consumer"
  },
  "default.setting.account": {
    "thor": "cup1"
  },
  "default.setting.crossorg_workflow": {
    "thor": true
  },
  "default.setting.collab_feed_workflow": {
    "thor": false
  },
  "default.setting.common_analytic_progress": {
    "thor": true
  },
  "overrides.builder-thor-pub1.setting.type": "publisher"
};

for(var key in config) {
  config[key] = JSON.stringify(config[key]);
}
setKeys(config);

function setKeys(data, value) {
  if ({}.toString.apply(data) === '[object Object]') {
      var redisKeyValueArray = [];
      for (var key in data) {
          redisKeyValueArray.push(key);
          redisKeyValueArray.push(data[key]);
      }
      client.mset(redisKeyValueArray, function(err) {
          if(err) {
              deferred.reject(err);
          } else {
              deferred.resolve();
          }
      });
  } else if ({}.toString.apply(data) === '[object String]') {
      client.set(data, value, function(err) {
          if(err) {
              deferred.reject(err);
          } else {
              deferred.resolve();
          }
      });
  }
  client.set(key, function(err, response) {
    if(err) {
        deferred.reject(err);
    } else {
        deferred.resolve(response);
    }
  });
}
