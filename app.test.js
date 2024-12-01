// test/app.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /', function () 
  it('should return Hello, Jenkins!', function (done) {
    request(app)
      .get('/')
      .expect('Hello, Jenkins!', done);
  });
});
