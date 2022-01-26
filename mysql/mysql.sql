CREATE DATABASE app;

CREATE TABLE `app`.`user` (
`iduser` INT NOT NULL AUTO_INCREMENT,
`user_name` VARCHAR(45) NULL,
`pass_password` VARCHAR(45) NULL,
`user_email` VARCHAR(45) NULL,
PRIMARY KEY (`iduser`));