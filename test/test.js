var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
    it('responde with Hello World', function(done) {
        request(app).get('/').expect('hello world', done);
    })
})