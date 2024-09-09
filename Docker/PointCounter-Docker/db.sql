--   Version: 1 
--   Author: Lucas Simões Pólvora
--   Creation Date: 8/29/2024
--   Last Modified By: -
--   Last Modification Date: -

-- If you worked on this file go to the docker-guide.md and add yourself
-- as one of the authors to support the devs/users
CREATE TABLE IF NOT EXISTS t_module(
   id_module SERIAL PRIMARY KEY,
   modNumber INT NOT NULL,
   modType VARCHAR(5) NOT NULL,
   modTeacher VARCHAR(50) NOT NULL,
   modYear INT NOT NULL,
   modTrimester INT NOT NULL
);

CREATE TABLE IF NOT EXISTS t_class(
   id_class SERIAL PRIMARY KEY,
   claName VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS t_user(
   id_user SERIAL PRIMARY KEY,
   useName VARCHAR(150) NOT NULL,
   useEmail VARCHAR(150) NOT NULL UNIQUE,
   useSurname VARCHAR(50) NOT NULL,
   id_class INT NOT NULL,
   FOREIGN KEY(id_class) REFERENCES t_class(id_class)
);

CREATE TABLE t_team(
   id_group SERIAL PRIMARY KEY,
   groName VARCHAR(50) NOT NULL,
   groNbrOfPoints INT,
   id_module INT NOT NULL,
   FOREIGN KEY(id_module) REFERENCES t_module(id_module)
);

CREATE TABLE learns(
   id_module INT,
   id_class INT,
   nbrOfClassPoints VARCHAR(50),
   PRIMARY KEY(id_module, id_class),
   FOREIGN KEY(id_module) REFERENCES t_module(id_module),
   FOREIGN KEY(id_class) REFERENCES t_class(id_class)
);

CREATE TABLE is_affiliated(
   id_user INT,
   id_group INT,
   PRIMARY KEY(id_user, id_group),
   FOREIGN KEY(id_user) REFERENCES t_user(id_user),
   FOREIGN KEY(id_group) REFERENCES t_team(id_group)
);

CREATE TABLE IF NOT EXISTS has(
   id_user INT,
   id_module INT,
   nbrOfPersonnalPoints INT,
   PRIMARY KEY(id_user, id_module),
   FOREIGN KEY(id_user) REFERENCES t_user(id_user),
   FOREIGN KEY(id_module) REFERENCES t_module(id_module)
);