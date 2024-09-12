const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

// PostgreSQL connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'web_logdata',
    password: 'Swabi$222',
    port: 3333,
});

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up storage for multer to save files to the uploads folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the uploads directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Custom filename (to avoid duplicates)
    }
});

const upload = multer({ storage: storage });

// Ensure the uploads folder exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Create table for users if not exists
const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20),
    gender VARCHAR(10)
  )
`;

pool.query(createUserTableQuery, (err) => {
    if (err) {
        console.error('Error creating users table:', err);
    } else {
        console.log('Users table is ready');
    }
});

// Route to handle signup (POST /signup)
app.post('/signup', async (req, res) => {
    const { username, password, email, phone_number, gender } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO users (username, password, email, phone_number, gender) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [username, password, email, phone_number, gender]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting user data:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

// Route to handle login (POST /login)
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT username, email, phone_number, gender FROM users WHERE username = $1 AND password = $2',
            [username, password]
        );

        if (result.rows.length > 0) {
            res.status(200).json({ message: 'Login successful', user: result.rows[0] });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
});

// Route to handle file upload (POST /upload)
app.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    try {
        // Insert file metadata into PostgreSQL
        const result = await pool.query(
            'INSERT INTO file_user (filename, file_path) VALUES ($1, $2) RETURNING *',
            [file.originalname, file.path]
        );
        res.status(201).json({ message: 'File uploaded successfully', file: result.rows[0] });
    } catch (error) {
        console.error('Error saving file metadata:', error);
        res.status(500).json({ message: 'Error saving file metadata' });
    }
});

// Route to fetch all uploaded files (GET /files)
app.get('/files', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM file_user ORDER BY upload_date DESC');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).json({ message: 'Error fetching files' });
    }
});

// Serve static files from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
