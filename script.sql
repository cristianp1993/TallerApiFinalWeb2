-- Crear la base de datos y dentro crear las tablas
--CREATE DATABASE movies_box;


-- Crear la tabla de director
CREATE TABLE director (
    id SERIAL PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE,
    cantidad_peliculas INTEGER
);

-- Crear la tabla de pelicula
CREATE TABLE pelicula (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    genero VARCHAR(100),
    fecha_estreno DATE,
    director_id INTEGER,
    vista BOOLEAN DEFAULT FALSE,
    calificacion INTEGER CHECK (calificacion BETWEEN 1 AND 10),
    critica TEXT,
    FOREIGN KEY (director_id) REFERENCES director(id)
);
