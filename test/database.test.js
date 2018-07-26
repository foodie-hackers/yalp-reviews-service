var db = require('../database/index');

test('Should get expected reviews for "The Bird" when the given restaurant id is 6', () => {
  var reviewsForRestaurant =  db.getAllReviews(6, (err, data) => {
    if (err) {
      throw err;
    } else {
      return data;
    }
  });
  
  setTimeout(function() {
    expect(reviewsForRestaurant[0].text).to.be.equal("One of the best chicken sandwiches I\'ve ever had. Quick line and fast service makes what looks like a long wait short. If you\'re in the area it\'s must try");
  }, 1000);
});

test('Should get two reviews for "Ijji Sushi" with restaurant id 83', () => {
  var reviewsForRestaurant = db.getAllReviews(83, (err, data) => {
    if (err) {
      throw err;
    } else {
      return data.length;
    }
  });
  
  setTimeout(function() {
    expect(reviewsForRestaurant).to.be.equal(2);
  }, 1000);
});

test('Should get reviews for "Eight Tables by George Chen" with restaurant id 99', function() {
  var reviewsForRestaurant = db.getAllReviews(99, (err, data) => {
    if (err) {
      throw err;
    } else {
      return data;
    }
  });
  
  setTimeout(function() {
    expect(reviewsForRestaurant[0].name).to.be.equal("Eight Tables by George Chen");
  }, 1000);
});