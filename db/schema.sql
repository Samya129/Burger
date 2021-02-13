CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(60) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);