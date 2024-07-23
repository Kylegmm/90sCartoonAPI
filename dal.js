const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: '90sCartoons',
    password: 'K6l3mm08',
    port: 5432,
});

const getCartoons = async () => {
    const result = await pool.query('SELECT * FROM cartoons');
    return result.rows;
};

const addCartoon = async (cartoon) => {
    const result = await pool.query(
        'INSERT INTO cartoons (name, show, year, description) VALUES ($1, $2, $3, $4) RETURNING *',
        [cartoon.name, cartoon.show, cartoon.year, cartoon.description]
    );
    return result.rows[0];
};

const updateCartoon = async (id, cartoon) => {
    const result = await pool.query(
        'UPDATE cartoons SET name = $1, show = $2, year = $3, description = $4 WHERE id = $5 RETURNING *',
        [cartoon.name, cartoon.show, cartoon.year, cartoon.description, id]
    );
    return result.rows[0];
};

const deleteCartoon = async (id) => {
    const result = await pool.query('DELETE FROM cartoons WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = {
    getCartoons,
    addCartoon,
    updateCartoon,
    deleteCartoon
};
