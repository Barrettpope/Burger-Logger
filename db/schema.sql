-- Drops the burgers_db if it already exists.
DROP DATABASE IF EXISTS burgers_db;

-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the burgers table.
CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
  burger_name VARCHAR
    (255),
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY
    (id)
);