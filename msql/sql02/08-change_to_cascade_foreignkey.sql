select * from categorias;

-- intentar eliminar el id2 
Delete FROM categorias WHERE id = 2;

-- modificar el id 7 cambiarlo a id 11
SELECT * FROM categorias WHERE id = 7;
UPDATE categorias SET id = 11 WHERE id = 7;

-- eliminar el id 3 frappes sin eliminar los productos
DELETE FROM categorias WHERE id = 3;


USE tienda;
SELECT * FROM roles;
SELECT * FROM usuarios where rol_id = 1;

