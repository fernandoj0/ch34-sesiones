SELECT * FROM tienda.roles;

-- INSERTAR una persona de 10 años
INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
        VALUES("Fernando", "Juarez", "Fondo de Vikini",  "578123567", "ferjuarez@gmail.com", "2000-08-06", 1);

-- Hacer una consulta que nos entregue la sumatoria del total de cada compra de cada producto
-- del id compra 3

SELECT 
    SUM(total) AS "total"
    FROM compras_has_productos
    GROUP BY compras_id
    HAVING compras_id =3;

update compras 
set monto_total = (select sum(total) as total 
					from compras_has_productos 
                    where compras_id = 3 ) 
where id = 3;


call actualizarMontoTotal(4);
call actualizarMontoTotal(5);
call actualizarMontoTotal(6);