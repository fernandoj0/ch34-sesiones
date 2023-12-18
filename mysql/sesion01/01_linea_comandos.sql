/*
Sesion MySQL 01
GENERATION MX
*/

-- ver las bases de datos dispobiles
SHOW databases;

-- Crear una base de datos 
CREATE DATABASE tienda;
-- seleccionar  la base de datos para su uso
USE tienda;
-- crear tabla productos 
CREATE TABLE productos(
	id INT NOT NULL KEY auto_increment,
    nombre VARCHAR(120) NOT NULL,
    precio DOUBLE NOT NULL,
    categoria VARCHAR(20)
);

-- mostrar las tablas existentes en una database
SHOW TABLES;

-- mostrar la estructura de una tabla
DESCRIBE productos;