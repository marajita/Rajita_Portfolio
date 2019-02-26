DROP TABLE Information;
CREATE TABLE Information(
id INT auto_increment NOT NULL,
name varchar(30) NOT NULL,
email varchar(50) NOT NULL,
phone BIGINT NULL,
message varchar(300) NOT NULL,
createdAt DATETIME,
updatedAt DATETIME,
PRIMARY KEY(id)
);

INSERT INTO Information (name, email, phone, message)
VALUES("Rajita", "rajita.maharjan@gmail.com", 3472337674, "Hello Aloogo");

INSERT INTO Information (name, email, phone, message)
VALUES("Sarun", "sarunmaharjan@gmail.com", 7576947598, "Hello Twaat");


SELECT * FROM Information;
