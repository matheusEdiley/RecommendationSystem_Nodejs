'use strict';

var _serverConfig = require('./serverConfig');

_serverConfig.server.get('/', function (req, res) {
  res.json({
    'message': 'Hello world node.js es6 app.'
  });
});