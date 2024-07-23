CREATE TABLE cartoons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    show VARCHAR(100) NOT NULL,
    year INTEGER NOT NULL,
    description TEXT
);
