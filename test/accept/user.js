var logger = require('winston');
var server = require('../../app');
var chai = require('chai');
var chaiHttp = require('chai-http');
var seed = require('../../bin/seed/seed');
var User = require('../../server/dao/user');
var expect = require('chai').expect;
var config = require('config');
var url = config.get('TestSuit.chaiUrl');

chai.should();
chai.use(chaiHttp);

describe('Users', function() {

  // Before our test suite
  before(function(done) {
    // Start our app on an alternative port for acceptance tests
    server.listen(8001, function() {
      logger.info('Listening at http://localhost:8001 for acceptance tests');

      // Seed the DB with our users
      seed(function(err) {
        done(err);
      });
    });
  });

  describe('/GET users', function() {
    it('should return a list of users', function(done) {
      chai.request(url)
        .get('/users')
        .end(function(err, res) {
          res.body.content.should.be.a('array');
          res.should.have.status(200);
          res.body.status.should.be.eql(200);
          res.body.content.length.should.be.eql(100);
          done();
        });
    });
  });

  describe('/GET users/:id', function() {
    it('should return a single user', function(done) {
      // Find a user in the DB
      User.findOne({}, function(err, user) {
        var id = user._id;

        // Read this user by id
        chai.request(url)
          .get('/users/' + id)
          .end(function(err, res) {
            res.should.have.status(200);
            res.body.status.should.be.eql(200);
            expect(res.body.content).to.be.a('object');
            expect(res.body.content.name.first).to.be.a('string');
            expect(res.body.content._id).to.be.eq(user._id.toString());
            done();
          });
      });
    });
  });

  describe('/DELETE users/:id', function() {
    it('should return a succeed message', function(done) {
      // Find a user in the DB
      User.findOne({}, function(err, user) {
        var id = user._id;

        // Read this user by id
        chai.request(url)
          .delete('/users/' + id)
          .end(function(err, res) {
            res.should.have.status(200);
            res.body.status.should.be.eql(200);
            expect(res.body).to.be.a('object');
            expect(res.body.message).to.be.eq('User deleted successfully');
            done();
          });
      });
    });
  });

  describe('/PUT users/:id', function() {
    it('should return a succeed message', function(done) {
      // Find a user in the DB
      User.findOne({}, function(err, user) {
        var id = user._id;

        // Read this user by id
        chai.request(url)
          .put('/users/' + id)
          .send(user)
          .end(function(err, res) {
            res.should.have.status(200);
            res.body.status.should.be.eql(200);
            expect(res.body).to.be.a('object');
            expect(res.body.message).to.be.eq('User updated successfully');
            done();
          });
      });
    });
  });

  describe('/POST users/', function() {
    it('should return a succeed message and the new user', function(done) {

      var request = {
        "gender": "female",
        "name": {
          "title": "miss",
          "first": "allie",
          "last": "willis"
        },
        "location": {
          "street": "7135 the crescent",
          "city": "Leixlip",
          "state": "colorado",
          "zip": 37191
        },
        "email": "allie.willis@example.com",
        "username": "crazybear293",
        "password": "3232",
        "salt": "UVMKO1Tj",
        "md5": "b7441c556f250fe6ebb3367ba708d4b6",
        "sha1": "fc79c95d01ca351efdf283331f39f2384db1dd78",
        "sha256": "999afe92c680c6d74412ff438c8d0901028805caf66aeff536e0eed52e758d55",
        "registered": 1216643814,
        "dob": 253903290,
        "phone": "041-379-5675",
        "cell": "081-471-3648",
        "PPS": "9408385T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/19.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
        },
        "__v": 0
      };

      chai.request(url)
        .post('/users/')
        .send(request)
        .end(function(err, res) {
          res.should.have.status(201);
          res.body.status.should.be.eql(201);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.be.eq('User created successfully');
          expect(res.body.content.email).to.be.eq(request.email);
          done();
        });

    });
  });

  describe('/POST users/', function() {
    it('should return an error message because of it is missing the email', function(done) {

      var request = {
        "gender": "female",
        "location": {
          "street": "7135 the crescent",
          "city": "Leixlip",
          "state": "colorado",
          "zip": 37191
        },
        "username": "crazybear293",
        "password": "3232",
        "salt": "UVMKO1Tj",
        "md5": "b7441c556f250fe6ebb3367ba708d4b6",
        "sha1": "fc79c95d01ca351efdf283331f39f2384db1dd78",
        "sha256": "999afe92c680c6d74412ff438c8d0901028805caf66aeff536e0eed52e758d55",
        "registered": 1216643814,
        "dob": 253903290,
        "phone": "041-379-5675",
        "cell": "081-471-3648",
        "PPS": "9408385T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/19.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
        }
      };

      chai.request(url)
        .post('/users/')
        .send(request)
        .end(function(err, res) {
          res.should.have.status(400);
          res.body.status.should.be.eql(400);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.be.eq('Validation error');
          expect(res.body.errors[0].msg).to.be.eq('Invalid email');
          done();
        });
    });
  });

});
