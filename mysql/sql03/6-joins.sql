-- mostrar los usuarios con sus respectivos roles

SELECT 
	usuarios.id AS "userId",
    email,
    rol_id,
    roles.nombre
  FROM usuarios
  INNER JOIN roles
  ON usuarios.rol_id = roles.id;

  -- mostrar los productos con el nombre de la categoria asignada
select
	productos.nombre,
    precio,
    categorias.nombre
    from productos
    inner join categorias
    on productos.categoria_id = categorias.id
    -- ordenar por nombre de categoria en forma descendente
    ORDER BY categorias.nombre DESC, productos.nombre ASC;
    
    
SELECT 
	usuarios.id AS "usuarioID",
    usuarios.nombre AS "nombreUser",
    usuarios.email AS "email",
    roles.nombre AS "rol",
    compras.fecha_compra
FROM usuarios 
INNER JOIN roles 
ON usuarios.rol_id = roles.id
INNER JOIN compras
on usuarios.id = compras.usuario_id;



-- mostar con where

SELECT 
	usuarios.id AS "usuarioID",
    usuarios.nombre AS "nombreUser",
    usuarios.email AS "email",
    roles.nombre AS "rol",
    compras.id AS "comprasID",
    compras.fecha_compra,
    compras_has_productos.productos_id AS "productosID",
    productos.nombre AS "nombre producto",
    categorias.nombre AS "nombre categoria"
FROM usuarios 
INNER JOIN roles 
ON usuarios.rol_id = roles.id
INNER JOIN compras
on usuarios.id = compras.usuario_id
INNER JOIN compras_has_productos
ON compras.id = compras_has_productos.compras_id
INNER JOIN productos
ON compras_has_productos.productos_id = productos.id
INNER JOIN categorias
ON productos.categoria_id = categorias.id
WHERE usuarios.id IN(2,4);

-- establecer null en la categoria de frappes

SELECT * FROM productos WHERE categoria_id = 3;
SELECT * FROM categorias;

-- para quitar la opcion de not null del campo de categorias_id
set foreign_key_checks = 0;
ALTER TABLE productos
	CHANGE COLUMN categoria_id categoria_id BIGINT NULL;
set foreign_key_checks = 0;

-- ahora si poner null en frappes
UPDATE productos SET categoria_id = NULL where categoria_id = 3;
SELECT * FROM productos;

SELECT 
	usuarios.id AS "usuarioID",
    usuarios.nombre AS "nombreUser",
    usuarios.email AS "email",
    roles.nombre AS "rol",
    compras.id AS "comprasID",
    compras.fecha_compra,
    compras_has_productos.productos_id AS "productosID",
    productos.nombre AS "nombre producto",
    categorias.nombre AS "nombre categoria"
FROM usuarios 
INNER JOIN roles 
ON usuarios.rol_id = roles.id
INNER JOIN compras
on usuarios.id = compras.usuario_id
INNER JOIN compras_has_productos
ON compras.id = compras_has_productos.compras_id
INNER JOIN productos
ON compras_has_productos.productos_id = productos.id
LEFT JOIN categorias
ON productos.categoria_id = categorias.id
WHERE usuarios.id IN(2,4);
