const request = require('supertest');
const addContext = require('mochawesome/addContext');

const chai = require('chai');
const expect = chai.expect;
const Joi = require('joi');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../../.env')});

const parameters = require('../parameters.json');
const url = process.env.URL;
const { schemaComments } = require('../../schemas/comments.schema.js');

function htmlReport(arg1, arg2) { addContext(arg1, {title: 'Body', value: arg2}); }

describe('Comments', function () {
  this.timeout(30000);

  describe('Consult comments', function () {
    it("(GET) Success (200) - See comments by id", function (done) {
      request(url)
      .get(`/posts/${parameters.GET.ID}/comments`)
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(200);
        for (let i=0; i < res.body.length; i++) {
          expect(res.body[i].postId).to.be.equal(parameters.GET.COMMENTS[i].postId);
          expect(res.body[i].id).to.be.equal(parameters.GET.COMMENTS[i].id);
          expect(res.body[i].name).to.be.equal(parameters.GET.COMMENTS[i].name);
          expect(res.body[i].email).to.be.equal(parameters.GET.COMMENTS[i].email);
          expect(res.body[i].body).to.be.equal(parameters.GET.COMMENTS[i].body);
        }
        done();
      });
    });

    it("(GET) Success (200) - See comments by non-existent id", function (done) {
      request(url)
      .get('/posts/xxxx/comments')
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(200);
        expect(res.body).to.be.eql([]);
        done();
      });
    });

    it("(GET) Success (200) - See comments by postId", function (done) {
      request(url)
      .get(`/comments?postId=${parameters.GET.COMMENTS[0].postId}`)
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(200);
        for (let i=0; i < res.body.length; i++) {
          expect(res.body[i].postId).to.be.equal(parameters.GET.COMMENTS[i].postId);
          expect(res.body[i].id).to.be.equal(parameters.GET.COMMENTS[i].id);
          expect(res.body[i].name).to.be.equal(parameters.GET.COMMENTS[i].name);
          expect(res.body[i].email).to.be.equal(parameters.GET.COMMENTS[i].email);
          expect(res.body[i].body).to.be.equal(parameters.GET.COMMENTS[i].body);
        }
        done();
      });
    });

    it("(GET) Success (200) - See comments by non-existent postId", function (done) {
      request(url)
      .get('/comments?postId=xxxxx')
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(200);
        expect(res.body).to.be.eql([]);
        done();
      });
    });
  });

  describe('Contract comments', function () {
    it("(GET) See comments by id", function (done) {
      request(url)
      .get(`/posts/${parameters.GET.ID}/comments`)
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        Joi.validate(res.body, Joi.array().items(schemaComments), {
          abortEarly: false
        }, (err) => { if (err) throw err; });
        done();
      });
    });

    it("(GET) See comments by postId", function (done) {
      request(url)
      .get(`/comments?postId=${parameters.GET.COMMENTS[0].postId}`)
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        Joi.validate(res.body, Joi.array().items(schemaComments), {
          abortEarly: false
        }, (err) => { if (err) throw err; });
        done();
      });
    });
  });
});