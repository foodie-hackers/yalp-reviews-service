const db = require('../database/index.js');

afterAll(() => db.connection.end());

test('Should get expected reviews for "The Bird" when the given restaurant id is 6', (done) => {
  function callback(error, data) {
    expect(data[0].text).toBe("\"One of the best chicken sandwiches I\'ve ever had. Quick line and fast service makes what looks like a long wait short. If you\'re in the area it\'s must try\"");
    done();
  }

  db.getAllReviews(6, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
  });
<<<<<<< HEAD
  
  setTimeout(function() {
    expect(reviewsForRestaurant[0].text).toBe("One of the best chicken sandwiches I\'ve ever had. Quick line and fast service makes what looks like a long wait short. If you\'re in the area it\'s must try");
  }, 1000);
=======
>>>>>>> 83675bd841a97f7ce3e59ad9119c5b5e3ef78eb2
});

test('Should get two reviews for "Ijji Sushi" with restaurant id 83', (done) => {
  function callback(error, data) {
    expect(data.length).toBe(2);
    done();
  }

  db.getAllReviews(83, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
<<<<<<< HEAD
  });
  
  setTimeout(function() {
    expect(reviewsForRestaurant).toBe(2);
  }, 1000);
=======
  }); 
>>>>>>> 83675bd841a97f7ce3e59ad9119c5b5e3ef78eb2
});

test('Should get reviews for "Eight Tables by George Chen" with restaurant id 99', function(done) {
  function callback(error, data) {
    expect(data[0].name).toBe("\"Eight Tables by George Chen\"");
    done();
  }

  db.getAllReviews(99, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
  });
});

test('should have 234 restaurant reviews in database', (done) => {
  function callback(error, data) {
    expect(data.length).toBe(234);
    done();
  }

  db.connection.query('SELECT * FROM reviews', (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
});

test('should have 100 restaurants in database', (done) => {
  function callback(error, data) {
    expect(data.length).toBe(100);
    done();
  }

  db.connection.query('SELECT * FROM business', (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
});

test('should have 234 users in database', (done) => {
  function callback(error, data) {
    expect(data.length).toBe(234);
    done();
  }

  db.connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
<<<<<<< HEAD
  
  setTimeout(function() {
    expect(reviewsForRestaurant[0].name).toBe("Eight Tables by George Chen");
  }, 1000);
=======
>>>>>>> 83675bd841a97f7ce3e59ad9119c5b5e3ef78eb2
});