CREATE DATABASE node_mvc;

USE node_mvc;

CREATE TABLE usuarios(
    id INT auto_increment,
    nombre VARCHAR(200),
    email VARCHAR(100),
    telefono VARCHAR(50),
    PRIMARY KEY(id)
)Engine = InnoDB;

INSERT INTO usuarios(nombre, email, telefono) VALUES
('Juan Perez', '