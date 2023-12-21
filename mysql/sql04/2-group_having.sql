SELECT 
u.id,
u.email,
co.id,
co.fecha_compra
FROM usuarios u
INNER JOIN compras co
ON u.id = co.usuario_id;

-- mostrar usuarios y el número total de compras que han realizado
SELECT 
	u.id,
	u.email,
    count( co.id ) AS "ComprasTotales" 
FROM usuarios u
INNER JOIN compras co
ON u.id = co.usuario_id
group by u.id;

-- uso de where y having en agrupaciones
SELECT 
	u.id,
	u.email,
    count( co.id ) AS "ComprasTotales" 
FROM usuarios u
INNER JOIN compras co
ON u.id = co.usuario_id
WHERE u.id <= 5
group by u.id
HAVING ComprasTotales >= 2;

-- mostrar las compras con la sumatoria de las ventas de cada producto

SELECT
	co.id AS compraID,
	-- chp.productos_id AS ProductoID,
	-- cantidad,
	-- subtotal AS precioProducto,
	-- total AS costoTotalProducto
    u.email,
    SUM(chp.total) AS totalCompra
FROM compras co
INNER JOIN compras_has_productos chp
ON co.id = chp.compras_id
INNER JOIN usuarios u
ON co.usuario_id = u.id
GROUP BY co.id
HAVING totalCompra > 300;
    
    