const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'yalp_reviews'
});

connection.connect(((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
}));

// get all the reviews associated with one restaurant
const getAllReviews = function(restaurantId, callback) {
  const query = `SELECT * FROM reviews where business_id = ${restaurantId};`;
  connection.query(query, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data);
      console.log(`Successfully query all the reviews associated with restaurant id ${restaurantId}.`);
    }
  });
}

module.exports = {
  getAllReviews
};