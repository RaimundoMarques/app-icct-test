CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(150),
    passwd varchar(150)
);

INSERT INTO users(name, email,passwd)
VALUES ('admin', 'admin@example.com', '321654987')