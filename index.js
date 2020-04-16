'use strict';

const hof = require('hof');
const config = require('./config');

const settings = require('./hof.settings');

if (process.env.VCAP_SERVICES) {
  var vcap_services = JSON.parse(process.env.VCAP_SERVICES);
  var hostname = vcap_services.redis[0].credentials.host
  var port = vcap_services.redis[0].credentials.port
  var uri = vcap_services.redis[0].credentials.uri
  var pass = vcap_services.redis[0].credentials.password
}

const redissetting = {
    port: port || '6379',
    host: hostname || '127.0.0.1',
    password: pass,
    url: uri
  };

settings.routes = settings.routes.map(route => require(route));
settings.root = __dirname;
settings.start = false;

settings.redis = redissetting


module.exports = hof(settings);
