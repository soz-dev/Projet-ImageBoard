/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

chai.use(chaiHttp);

describe('/POST add user', () => {
  it('it should add a user', (done) => {
    const _id = new mongoose.Types.ObjectId();
    const user = {
      _id,
      email: 'email2@google.fr',
      password: 'Motdepasse2',
      firstname: 'Eva',
      lastname: 'Barbaro',
      username: 'EvaBarbaro1',
      iconImage: 'public/profile_plain.svg',
      description: "Vous n'avez pas de description",
      status: 0,
      privilege: 0,
      reputation: 0,
      creation_date: Date.now(),
      modification_date: Date.now(),
    };
    chai.request('http://localhost:3000')
      .post('/api/users/addUser')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('email').to.be.eql('email1@google.fr');
        res.body.should.have.property('firstname').to.be.eql('Eva');
        res.body.should.have.property('lastname').to.be.eql('Barbaro');
        res.body.should.have.property('username').to.be.eql('EvaBarbaro1');
        res.body.should.have.property('iconImage').to.be.eql('public/profile_plain.svg');
        res.body.should.have.property('description').to.be.eql("Vous n'avez pas de description");
        res.body.should.have.property('status').to.be.eql(0);
        res.body.should.have.property('privilege').to.be.eql(0);
        res.body.should.have.property('reputation').to.be.eql(0);
        done();
      });
  });
});

describe('/POST add user', () => {
  it('it should not add a user', (done) => {
    const id = new mongoose.Types.ObjectId();
    const user = {
      _id: id,
      email: 'email2@google.fr',
      password: 'Motdepasse2',
      firstname: 'Eva',
      lastname: 'Barbaro',
      username: 'EvaBarbaro1',
      iconImage: 'public/profile_plain.svg',
      description: "Vous n'avez pas de description",
      status: 0,
      privilege: 0,
      reputation: 0,
      creation_date: Date.now(),
      modification_date: Date.now(),
    };
    chai.request('http://localhost:3000')
      .post('/api/users/addUser')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
