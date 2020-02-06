/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

chai.use(chaiHttp);

describe('/GET posts', () => {
  it('it should retrieve all the posts', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/posts')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');
        done();
      });
  });
});
