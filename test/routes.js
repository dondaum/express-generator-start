var chai = require('chai');
//var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

describe('get wiki routes', function() {
  it('should get a 200 ok status response', function(done){
    chai.request(server)
    .get('/wiki/help')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });
});
