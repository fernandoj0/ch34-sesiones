SELECT * FROM tienda.productos_has_compras;

INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total) 
VALUES (1, 6, 4, 65, 0 ,260) ; 

INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total) 
VALUES (1, 14, 4, 70, 0 ,280) ; 

-- Compra 1
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(2, 6, 4, 65, 0, 260);
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(2, 14, 4, 70, 0, 280);

-- Compra 2
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(2, 8, 3, 65, 0, 195);
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(2, 12, 2, 80, 0, 160);

-- Compra 3
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(3, 10, 5, 55, 0, 275);
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(3, 16, 1, 70, 0, 70);

-- Compra 4
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(4, 18, 2, 65, 0, 130);
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(4, 20, 3, 90, 0, 270);

-- Compra 5
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(5, 1, 2, 50, 0, 100);
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(5, 2, 4, 25, 0, 100);

-- Compra 6
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(6, 3, 1, 50, 0, 50);
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(6, 15, 2, 70, 0, 140);

-- Compra 7
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(7, 8, 2, 65, 0, 130);
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(7, 11, 2, 65, 0, 130);

-- Compra 8
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(8, 10, 5, 45, 0, 225);
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(8, 16, 1, 60, 0, 60);

-- Compra 9
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(9, 6, 2, 65, 0, 130);
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(9, 14, 2, 70, 0, 140);

-- Compra 10
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(10, 8, 1, 65, 0, 65);
INSERT INTO productos_has_compras(compras_id, productos_id, cantidad, subtotal, descuento, total)
VALUES(10, 12, 2, 80, 0, 160);


select * from productos_has_compras;