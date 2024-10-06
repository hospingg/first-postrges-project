

CREATE TABLE authors(
    id serial PRIMARY KEY,
    first_name varchar(300) NOT NULL CHECK(first_name != ''),
    last_name varchar(300),
    birthdate date,
    email varchar(300) UNIQUE,
    phone_number varchar(14) UNIQUE,
);

CREATE TABLE book(
    id serial PRIMARY KEY,
    author_id int REFERENCES authors(id),
    name varchar(300) NOT NULL CHECK(name != ''),
    public_date date,
    pages int CHECK(pages > 0)
    user_id int REFERENCES users(id)
);

CREATE TABLE users(
    id serial PRIMARY KEY,
    first_name varchar(300) NOT NULL CHECK(first_name != ''),
    last_name varchar(300),
    email varchar(300) UNIQUE,
    phone_number varchar(14) UNIQUE,
    adress varchar(400)
)
