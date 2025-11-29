-- V1__create_listing_table.sql

-- Tabla para almacenar la información de las casas/listings
CREATE TABLE listing (
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price_per_night NUMERIC(10, 2) NOT NULL,
    location VARCHAR(100),
    guest_count INT DEFAULT 1,
    bathroom_count INT DEFAULT 1,
    image_url_list TEXT ARRAY, -- Usamos un array de texto para almacenar varias URLs
    is_guest_favorite BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insertar un registro de prueba (Mock Data Real)
INSERT INTO listing (id, title, description, price_per_night, location, image_url_list, is_guest_favorite)
VALUES (
    'a1b2c3d4-e5f6-7890-1234-567890abcdef', -- ID para que lo puedas buscar en el frontend
    'Modern Apartment near the Beach',
    'A fully equipped apartment with stunning sea views. Perfect for a relaxing getaway.',
    120.00,
    'Barcelona, Spain',
    '{"https://picsum.photos/id/100/600/400", "https://picsum.photos/id/101/600/400"}',
    TRUE
);
