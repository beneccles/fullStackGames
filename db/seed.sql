DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS users_login;
DROP TABLE IF EXISTS games;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    is_admin BOOLEAN
);

CREATE TABLE users_login (
    user_login_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    hash TEXT
);

CREATE TABLE games (
    game_id SERIAL Primary Key,
    title VARCHAR(100),
    price INTEGER,
    img TEXT
)