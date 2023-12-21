SELECT 
 p.id,
 p.nombre,
 ca.nombre AS categoria
FROM productos p
INNER JOIN categorias ca
ON ca.id = p.categoria_id;

SELECT 
 COUNT( p.id )
FROM productos p
INNER JOIN categorias ca
ON ca.id = p.categoria_id; -- 15 productos mostrados

SELECT 
 p.id,
 p.nombre,
 ca.nombre AS categoria
FROM productos p
LEFT JOIN categorias ca
ON ca.id = p.categoria_id; -- 20 productos mostrados


SELECT 
 p.id,
 p.nombre,
 ca.nombre AS categoria
FROM productos p
RIGHT JOIN categorias ca
ON ca.id = p.categoria_id;