const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Database connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'web_logdata',
    password: 'Swabi$222',
    port: 8888,
});

app.use(cors()); // To allow requests from React app
app.use(bodyParser.json());

// Create a table if not exists
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20),
    gender VARCHAR(10)
  )
`;

pool.query(createTableQuery, (err, res) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Table is ready');
    }
});

// Route to handle signup
app.post('/signup', async (req, res) => {
    const { username, password, email, phone_number, gender } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO users (username, password, email, phone_number, gender) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [username, password, email, phone_number, gender]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
