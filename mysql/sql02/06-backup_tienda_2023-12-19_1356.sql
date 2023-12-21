-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: tienda
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Café','Variedades de café caliente'),(2,'Bebidas','Refrescos y bebidas frías'),(3,'Frappés','Bebidas frías y espumosas'),(4,'Especialidades','Productos especiales del chef'),(5,'Bagels','Panecillos de bagel con diversos rellenos'),(6,'Paninis','Sandwiches calientes prensados'),(7,'Cuernitos','Productos de panadería en forma de cuerno'),(8,'Waffles','Waffles dulces y salados'),(9,'Panes','Variedades de pan fresco');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usuario_id` bigint NOT NULL,
  `monto_total` decimal(9,2) NOT NULL,
  `fecha_compra` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `compra_has_usuario_idx` (`usuario_id`),
  CONSTRAINT `compra_has_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) NOT NULL,
  `precio` decimal(9,2) NOT NULL,
  `categoria_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_has_categoria_idx` (`categoria_id`),
  CONSTRAINT `producto_has_categoria` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Café Americano',50.00,1),(2,'Espresso',25.00,1),(3,'Matcha Latte',50.00,2),(4,'Chai Latte',55.00,2),(5,'Chocolate',45.00,2),(6,'Café Frappé',65.00,3),(7,'Oreo Frappé',65.00,3),(8,'Mocha Frappé',65.00,3),(9,'Sea Salt Caramel',60.00,3),(10,'Dark Horchata Ice',55.00,3),(11,'Bagel Clásico',65.00,4),(12,'Bagel Serrano',80.00,4),(13,'Bagel Dulce/Salado',40.00,4),(14,'Panini Italiano',70.00,5),(15,'Pizanini',70.00,5),(16,'Panini Vegetariano',70.00,5),(17,'Cuernito Clásico',65.00,6),(18,'Cuernito Italiano',65.00,6),(19,'Waffle Tradicional',80.00,7),(20,'Waffle con Helado o Fresas',90.00,7);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_has_compras`
--

DROP TABLE IF EXISTS `productos_has_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_has_compras` (
  `productos_id` bigint NOT NULL,
  `compras_id` bigint NOT NULL,
  `cantidad` int DEFAULT NULL,
  `subtotal` decimal(9,2) DEFAULT NULL,
  `descuento` decimal(9,2) DEFAULT NULL,
  `total` decimal(9,2) DEFAULT NULL,
  PRIMARY KEY (`productos_id`,`compras_id`),
  KEY `fk_productos_has_compras_compras1_idx` (`compras_id`),
  KEY `fk_productos_has_compras_productos1_idx` (`productos_id`),
  CONSTRAINT `fk_productos_has_compras_compras1` FOREIGN KEY (`compras_id`) REFERENCES `compras` (`id`),
  CONSTRAINT `fk_productos_has_compras_productos1` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_has_compras`
--

LOCK TABLES `productos_has_compras` WRITE;
/*!40000 ALTER TABLE `productos_has_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_has_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'cliente','Cliente de la tienda'),(2,'admin','Administrador de la tienda'),(3,'almacen','Persona encargada del almacen'),(4,'propietario','Propietaria de la tienda'),(5,'vendedor','Vendedor de productos');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(70) NOT NULL,
  `apellido` varchar(70) NOT NULL,
  `direccion` varchar(300) DEFAULT NULL,
  `telefono` varchar(30) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `fecha_nacimiento` timestamp NULL DEFAULT NULL,
  `rol_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `usuario_has_rol_idx` (`rol_id`),
  CONSTRAINT `usuario_has_rol` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Sergio','Torres','Siempre viva 100','5555556610','torres@gmail.com','1983-12-08 06:00:00',3),(3,'Alice','Johnson','123 Main St','5551234878','alice@email.com','1990-05-15 06:00:00',1),(4,'Bob','Smith','456 Oak Ave','5555678754','bob@email.com','1985-08-22 06:00:00',2),(5,'Maria','Gonzalez','789 Pine Rd','5559101784','maria@email.com','1995-03-10 06:00:00',3),(6,'David','Brown','101 Cedar Ln','5551122457','david@email.com','1988-11-27 06:00:00',5),(7,'Sophia','Lee','202 Elm St','5553344139','sophia@email.com','1992-07-03 06:00:00',5),(8,'John','Davis','303 Maple Dr','5555566457','john@email.com','1980-09-14 06:00:00',1),(9,'Elena','Martinez','404 Birch Ave','5557788715','elena@email.com','1998-01-18 06:00:00',2),(10,'Michael','Taylor','505 Pine Ln','5559900000','michael@email.com','1987-04-25 06:00:00',3),(11,'Olivia','White','606 Oak Rd','5551122457','olivia@email.com','1994-12-05 06:00:00',4),(12,'Sergio','Torres','Siempre viva 100','1234567890','sergio.torres@idr.edu.mx','1983-12-08 19:00:00',1),(13,'Mirta','Tapia','Avellanitas 2799','1234567890','mirta_atd@hotmail.com','1994-07-31 14:35:00',2),(14,'Misael','Zepeda','Amo a Tony 9000','1234567890','misael.zepedadiaz@gmail.com','1994-02-23 06:00:00',3),(15,'Jorge','Ramirez','A todo gas 2001','1234567890','jorgermzc16@gmail.com','1994-10-16 06:00:00',4),(16,'Yazmin (Yaz)','Mora','Holitas 213','1234567890','yazminvaleriamoralesm@gmail.com','1995-01-29 06:00:00',5),(17,'Antonio (Tony)','Gonzalez','Toninator 2412','1234567890','navarrete.antonio.2301@gmail.com','1994-01-23 06:00:00',3),(18,'Jocelyn','Peña','Woof Woof 3257','1234567890','jocelyn.p.reyes332b@gmail.com','1997-05-07 06:00:00',5),(19,'Tania','Gayosso','Policía de Perritos 9985','1234567890','tania.gayosso@idr.edu.mx','1994-01-01 06:00:00',1),(20,'Sahary','Escobedo','Boopito 56','1234567890','sahary.escobedo@generation.org','1996-01-01 06:00:00',1),(21,'Nancy','Moreno','Calorcito 23','1234567890','nancy.moreno@generation.org','1996-01-01 06:00:00',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-19 13:57:55
