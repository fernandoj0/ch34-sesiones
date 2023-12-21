DESCRIBE usuarios;

-- insertar nuevos usuarios
INSERT INTO usuarios(nombre,apellido,direccion,telefono,email,fecha_nacimiento,rol_id)
VALUES ("Sergio", "Torres", "Siempre viva 100", "5555556610", "torres@gmail.com", "1983-12-08", 3);

INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
VALUES ("Alice", "Johnson", "123 Main St", "5551234878", "alice@email.com", "1990-05-15", 1);

INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
VALUES ("Bob", "Smith", "456 Oak Ave", "5555678754", "bob@email.com", "1985-08-22", 2);

INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
VALUES ("Maria", "Gonzalez", "789 Pine Rd", "5559101784", "maria@email.com", "1995-03-10", 3);

INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
VALUES ("David", "Brown", "101 Cedar Ln", "5551122457", "david@email.com", "1988-11-27", 5);

INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
VALUES ("Sophia", "Lee", "202 Elm St", "5553344139", "sophia@email.com", "1992-07-03", 5);

INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
VALUES ("John", "Davis", "303 Maple Dr", "5555566457", "john@email.com", "1980-09-14", 1);

INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
VALUES ("Elena", "Martinez", "404 Birch Ave", "5557788715", "elena@email.com", "1998-01-18", 2);

INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
VALUES ("Michael", "Taylor", "505 Pine Ln", "5559900000", "michael@email.com", "1987-04-25", 3);

INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
VALUES ("Olivia", "White", "606 Oak Rd", "5551122457", "olivia@email.com", "1994-12-05", 4);

UPDATE usuarios SET telefono = "5559900000" WHERE id = 10;


-- Insertar nuevos usuarios

INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
    VALUES(
    "Sergio",
    "Torres",
    "Siempre viva 100",
    "1234567890",
    "sergio.torres@idr.edu.mx",
    "1983-12-08 13:00",
    1
    );
    
    INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
    VALUES(
    "Mirta",
    "Tapia",
    "Avellanitas 2799",
    "1234567890",
    "mirta_atd@hotmail.com",
    "1994-07-31 08:35",
    2
    );
    
    INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
    VALUES(
    "Misael",
    "Zepeda",
    "Amo a Tony 9000",
    "1234567890",
    "misael.zepedadiaz@gmail.com",
    "1994-02-23",
    3
    );
    
    INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
    VALUES(
    "Jorge",
    "Ramirez",
    "A todo gas 2001",
    "1234567890",
    "jorgermzc16@gmail.com",
    "1994-10-16",
    4
    );
    
    INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
    VALUES(
    "Yazmin (Yaz)",
    "Mora",
    "Holitas 213",
    "1234567890",
    "yazminvaleriamoralesm@gmail.com",
    "1995-01-29",
    5
    );
    
    INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
    VALUES(
    "Antonio (Tony)",
    "Gonzalez",
    "Toninator 2412",
    "1234567890",
    "navarrete.antonio.2301@gmail.com",
    "1994-01-23",
    3
    );
    
    INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
    VALUES(
    "Jocelyn",
    "Peña",
    "Woof Woof 3257",
    "1234567890",
    "jocelyn.p.reyes332b@gmail.com",
    "1997-05-07",
    5
    );
    
    INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
    VALUES(
    "Tania",
    "Gayosso",
    "Policía de Perritos 9985",
    "1234567890",
    "tania.gayosso@idr.edu.mx",
    "1994-01-01",
    1
    );
    
    INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
    VALUES(
    "Sahary",
    "Escobedo",
    "Boopito 56",
    "1234567890",
    "sahary.escobedo@generation.org",
    "1996-01-01",
    1
    );
    
    INSERT INTO usuarios(nombre, apellido, direccion, telefono, email, fecha_nacimiento, rol_id)
    VALUES(
    "Nancy",
    "Moreno",
    "Calorcito 23",
    "1234567890",
    "nancy.moreno@generation.org",
    "1996-01-01",
    1
    );


SELECT * FROM usuarios;