'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _FamilyGroupModel = require('../FamilyGroups/FamilyGroupModel');

var _FamilyGroupModel2 = _interopRequireDefault(_FamilyGroupModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = 'test';


var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);

//Our parent block
describe('FamilyGroups', function () {
	after(function (done) {
		//Before each test we empty the database
		_FamilyGroupModel2.default.FamilyGroup.remove({}, function (err) {
			done();
		});
	});
});