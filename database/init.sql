CREATE DATABASE IF NOT EXISTS inti_punku;

USE inti_punku;

CREATE TABLE departamentos (
    id_departamento INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(100)
);

CREATE TABLE cargos (
    id_cargo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255)
);

CREATE TABLE empleados (
    id_empleado INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    correo VARCHAR(150),
    telefono VARCHAR(30),
    fecha_ingreso DATE,
    salario DECIMAL(10,2),
    id_departamento INT NOT NULL,
    id_cargo INT NOT NULL,

    FOREIGN KEY (id_departamento)
        REFERENCES departamentos(id_departamento),

    FOREIGN KEY (id_cargo)
        REFERENCES cargos(id_cargo)
);

INSERT INTO departamentos (nombre, ubicacion) VALUES
('Recursos Humanos', 'La Paz'),
('Operaciones Mineras', 'Oruro'),
('Administración', 'La Paz'),
('Tecnología', 'La Paz');

INSERT INTO cargos (nombre, descripcion) VALUES
('Gerente de RRHH', 'Responsable del área de Recursos Humanos'),
('Ingeniero de Minas', 'Supervisión de operaciones mineras'),
('Administrador', 'Gestión administrativa'),
('Desarrollador de Sistemas', 'Desarrollo y mantenimiento de sistemas'),
('Técnico de Operaciones', 'Soporte en operaciones mineras');

INSERT INTO empleados
(nombre, apellido, correo, telefono, fecha_ingreso, salario, id_departamento, id_cargo)
VALUES
('Carlos', 'Mamani', 'carlos@intipunku.com', '70000001', '2024-01-15', 7500, 1, 1),
('Ana', 'Quispe', 'ana@intipunku.com', '70000002', '2023-05-10', 6800, 2, 2),
('Luis', 'Condori', 'luis@intipunku.com', '70000003', '2025-02-01', 4500, 3, 3),
('María', 'Flores', 'maria@intipunku.com', '70000004', '2024-08-20', 6000, 4, 4),
('José', 'Choque', 'jose@intipunku.com', '70000005', '2025-01-10', 4200, 2, 5),
('Daniela', 'Rojas', 'daniela@intipunku.com', '70000006', '2023-11-05', 6300, 4, 4);