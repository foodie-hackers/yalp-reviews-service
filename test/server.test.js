const request = require('supertest');
const app = require('../server/index');

test('Should respond with json when given a valid restaurant id', () => {
  request(app)
    .get('/restaurants/1/reviews')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) {
        throw err;
      }
    });
});

test('Should respond with error when given a non-existing restaurant id', () => {
  request(app)
    .get('/restaurants/500/reviews')
    .expect('Content-Type', /json/)
    .expect(500)
    .end(function(err, res) {
      if (err) {
        throw err;
      }
    });
});