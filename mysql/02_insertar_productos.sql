/*
Sesion MySQL 01
Insertar productos

*/

-- insertar registros indicando el id
INSERT INTO productos(id, nombre, precio, categoria) 
VALUES (1, "Mango", 25, "Frutas"),
		(2, "Limón", 30, "Frutas");
        
-- insertar registros sin indicar id
INSERT INTO productos(nombre, precio, categoria) 
VALUES ("Bicicleta", 5000, "Deportes"),
		("Lavadora", 7000, "Linea Blanca"),
        ("Taladro", 2500, "Herramientas"),
        ("Desarmador", 50, "Herramientas");
        
INSERT INTO productos(nombre, precio, categoria) 
VALUES ("Pinza electricista", 120, "Herramientas");
        
-- mostrar registros
SELECT * FROM productos;