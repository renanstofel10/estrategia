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
const { schemaPosts } = require('../../schemas/posts.schema.js');

function htmlReport(arg1, arg2) { addContext(arg1, {title: 'Body', value: arg2}); }

describe('Posts', function () {
  this.timeout(30000);

  describe('Register posts', function () {
    it("(POST) Success (201) - register post", function (done) {
      request(url)
      .post('/posts')
      .set('Content-type', 'application/json; charset=UTF-8')
      .send({
        title: parameters.POST.TITLE,
        body: parameters.POST.BODY,
        userId: parameters.POST.USERID
      })
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(201);
        expect(res.body.title).to.be.equal(parameters.POST.TITLE);
        expect(res.body.body).to.be.equal(parameters.POST.BODY);
        expect(res.body.userId).to.be.equal(parameters.POST.USERID);
        expect(res.body.id).to.be.equal(101);
        done();
      });
    });
  });

  describe('Change posts', function () {
    it("(PUT) Success (201) - Change post (All Information)", function (done) {
      request(url)
      .put(`/posts/${parameters.PUT.ID}`)
      .set('Content-type', 'application/json; charset=UTF-8')
      .send({
        title: parameters.PUT.TITLE,
        body: parameters.PUT.BODY,
        userId: parameters.PUT.USERID
      })
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.title).to.be.equal(parameters.PUT.TITLE);
        expect(res.body.body).to.be.equal(parameters.PUT.BODY);
        expect(res.body.userId).to.be.equal(parameters.PUT.USERID);
        expect(res.body.id).to.be.equal(parameters.PUT.ID);
        done();
      });
    });

    it("(PATCH) Success (200) - Change post title", function (done) {
      request(url)
      .patch(`/posts/${parameters.PATCH.ORIGINAL.ID}`)
      .set('Content-type', 'application/json; charset=UTF-8')
      .send({
        title: parameters.PATCH.UPDATED.TITLE,
        userId: parameters.PATCH.ORIGINAL.USERID
      })
        .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.body).to.be.equal(parameters.PATCH.ORIGINAL.BODY);
        expect(res.body.userId).to.be.equal(parameters.PATCH.ORIGINAL.USERID);
        expect(res.body.id).to.be.equal(parameters.PATCH.ORIGINAL.ID);
        expect(res.body.title).to.be.equal(parameters.PATCH.UPDATED.TITLE);
        done();
      });
    });

    it("(PATCH) Success (200) - Change post body", function (done) {
      request(url)
      .patch(`/posts/${parameters.PATCH.ORIGINAL.ID}`)
      .set('Content-type', 'application/json; charset=UTF-8')
      .send({
        body: parameters.PATCH.UPDATED.BODY,
        userId: parameters.PATCH.ORIGINAL.USERID
      })
        .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.title).to.be.equal(parameters.PATCH.ORIGINAL.TITLE);
        expect(res.body.userId).to.be.equal(parameters.PATCH.ORIGINAL.USERID);
        expect(res.body.id).to.be.equal(parameters.PATCH.ORIGINAL.ID);
        expect(res.body.body).to.be.equal(parameters.PATCH.UPDATED.BODY);
        done();
      });
    });
  });

  describe('Consult posts', function () {
    it("(GET) Success (200) - See all posts", function (done) {
      request(url)
      .get('/posts')
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.length).to.be.equal(100);
        done();
      });
    });

    it("(GET) Success (200) - See especific post", function (done) {
      request(url)
      .get(`/posts/${parameters.GET.ID}`)
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.body).to.be.equal(parameters.GET.BODY);
        expect(res.body.userId).to.be.equal(parameters.GET.USERID);
        expect(res.body.id).to.be.equal(parameters.GET.ID);
        expect(res.body.title).to.be.equal(parameters.GET.TITLE);
        done();
      });
    });

    it("(GET) Not Found (404) - Consult non-existent post", function (done) {
      request(url)
      .get('/posts/XXXX')
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(404);
        expect(res.body).to.be.eql({});
        done();
      });
    });
  });

  describe('Contract posts', function () {
    it("(GET) See all posts", function (done) {
      request(url)
      .get('/posts')
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        Joi.validate(res.body, Joi.array().items(schemaPosts), {
          abortEarly: false
        }, (err) => { if (err) throw err; });
        done();
      });
    });

    it("(GET) See especific post", function (done) {
      request(url)
      .get(`/posts/${parameters.GET.ID}`)
      .set('Content-type', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        Joi.validate(res.body, schemaPosts, {
          abortEarly: false
        }, (err) => { if (err) throw err; });
        done();
      });
    });
  });

  describe('Delete posts', function () {
    it("(DELETE) Success (204) - Delete post", function (done) {
      request(url)
      .delete(`/posts/${parameters.PUT.ID}`)
      .end((err, res) => {
        if (err == null) { htmlReport(this, res.body) };
        expect(res.statusCode).to.be.equal(200);
        expect(res.body).to.be.eql({});
        done();
      });
    });
  });
});