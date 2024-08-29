CREATE TABLE IF NOT EXISTS t_user(
   id_user SERIAL PRIMARY KEY,
   useName VARCHAR(150) NOT NULL,
   useEmail VARCHAR(150) NOT NULL UNIQUE,
   useSurname VARCHAR(50) NOT NULL,
   useIsTeacher BOOLEAN
);

CREATE TABLE IF NOT EXISTS t_module(
   id_module SERIAL PRIMARY KEY,
   modNumber INT NOT NULL,
   modType VARCHAR(5) NOT NULL,
   modTeacher VARCHAR(50) NOT NULL,
   modYear INT NOT NULL,
   modTrimester INT NOT NULL
);

CREATE TABLE IF NOT EXISTS has(
   id_user INT,
   id_module INT,
   nbrOfPoints INT,
   PRIMARY KEY(id_user, id_module),
   FOREIGN KEY(id_user) REFERENCES t_user(id_user),
   FOREIGN KEY(id_module) REFERENCES t_module(id_module)
);