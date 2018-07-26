DROP DATABASE IF EXISTS yalp_reviews;

CREATE DATABASE yalp_reviews;

USE yalp_reviews;

CREATE TABLE business (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	review_count INT,
	avatar INT,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
	id INT NOT NULL AUTO_INCREMENT,
  name TEXT NOT NULL,
	business_id INT NOT NULL,
  user_id INT NOT NULL,
  stars INT,
  date TEXT,
  text TEXT(65535),
  useful INT,
  funny INT,
  cool INT,
  PRIMARY KEY (id),
  FOREIGN KEY (business_id) REFERENCES business(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);