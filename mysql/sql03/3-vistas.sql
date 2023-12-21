-- creacion de una vista
CREATE VIEW `edades` AS 
SELECT nombre,
	fecha_nacimiento,
    DATEDIFF(curdate(), fecha_nacimiento ) AS "Días",
    FLOOR(datediff(CURDATE(),fecha_nacimiento)/365) AS "Años" 
    FROM usuarios
    WHERE nombre NOT LIKE "%Oswa%";