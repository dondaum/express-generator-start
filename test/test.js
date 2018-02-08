var assert = require('assert');
var expect  = require("chai").expect;
var request = require("request");




describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});



describe('get /user url', function() {
  it('should get the user page', function() {
    const res = expect.request(app).get('/users');
    res.should.have.status(404);
  });
});
