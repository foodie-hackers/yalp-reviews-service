const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: 'yalp_reviews',
});

connection.connect(((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
}));

// get all the reviews and user data associated with one restaurant
const getAllReviews = function(restaurantId, callback) {
  const query = `SELECT reviews.name, reviews.date, reviews.text, reviews.stars, reviews.useful, reviews.funny, reviews.cool, users.name as user, users.review_count, users.avatar, users.city, users.state, users.friends, users.photos FROM users, reviews, business WHERE users.id = reviews.user_id and business.id = reviews.business_id and reviews.business_id = ${restaurantId};`;
  connection.query(query, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data);
      console.log(`Successfully query all the reviews and user data associated with restaurant id ${restaurantId}.`);
    }
  });
};

module.exports = {
  getAllReviews,
  connection
};