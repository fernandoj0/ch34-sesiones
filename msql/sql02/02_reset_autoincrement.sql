-- Eliminar todos los datos de la tabla de roles
USE tienda;
DELETE FROM roles;

-- resetar el valo de auto increment
ALTER table roles auto_increment = 1;

-- si se ejecuta esta linea antes de alter table, el id no
-- se reseteara. El valor con el que iniciara sera 100
INSERT INTO roles(id,nombre,descripcion) VALUES (100,"n/a", "valor temporal");

-- eliminar todos los datos y reset el autoincrement
TRUNCATE TABLE roles;

SELECT * FROM roles;