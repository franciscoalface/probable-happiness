CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;
CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id));
