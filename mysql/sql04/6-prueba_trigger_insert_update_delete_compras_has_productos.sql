select * from compras where id = 3;

select * from compras_has_productos where compras_id = 3;

DELETE FROM compras_has_productos WHERE compras_id = 3 AND productos_id = 12;
DELETE FROM compras_has_productos WHERE compras_id = 3 AND productos_id = 16;