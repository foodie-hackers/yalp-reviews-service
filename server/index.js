const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public')); 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/restaurants/:restaurant_id/reviews', (req, res) => {
  db.getAllReviews(req.params.restaurant_id, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log('Fail to get data from server.', err);
    } else {
      res.status(200).send(data);
      console.log(`Successfully get reviews for restaurant id ${req.params.restaurant_id} from server.`);
    }
  });
});

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log('Example app listening on port 3003');
  });
}

module.exports = app;