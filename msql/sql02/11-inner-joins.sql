USE tienda;
select * from compras where usuario_id = 3;

SELECT 
    usuarios.nombre, usuarios.apellido, usuarios.email,
    productos.nombre,
    compras_has_productos.subtotal,
    compras_has_productos.cantidad,
    compras_has_productos.total
    FROM usuarios
	INNER JOIN
    compras ON usuarios.id = compras.usuario_id
        INNER JOIN
    compras_has_productos ON compras.id = compras_has_productos.compras_id
        INNER JOIN
    productos ON productos.id = compras_has_productos.productos_id
WHERE
    usuarios.id = 3;