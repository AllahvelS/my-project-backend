DROP DATABASE IF EXISTS notes_dev;
CREATE DATABASE notes_dev;

\c notes_dev;

DROP TABLE IF EXISTS notes;
CREATE TABLE notes (
 id SERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 content TEXT NOT NULL,
 folder TEXT NOT NULL,
 date_created DATE,
 last_edited DATE,
 account_name VARCHAR(255),
 is_important BOOLEAN
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
