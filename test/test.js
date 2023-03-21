const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should()

const { app1 } = require('../app');
const { app2 } = require('../app');

chai.use(chaiHttp);

describe('API 1 /users', function () {
    it('should return a status 200 and correct user Data', function (done) {
        chai.request(app1)
            .get('/users')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('dumyData').equal('this dummy user');
                done();
            });
    });


});

describe('API 2 /user-message', function () {
    it('should return a status 200 and correct response', function (done) {
        chai.request(app2)
            .get('/send-message')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('message sent')
                done();
            });
    });
});
