CREATE DATABASE ng_juegos_db;

USE ng_juegos_db;

CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255), 
    image VARCHAR(200),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE game TO games;

DESCRIBE games;