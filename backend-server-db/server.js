const express = require('express');
const { Pool } = require('pg');  // Import PostgreSQL client
const cors = require('cors');  // For enabling CORS requests from React

const app = express();
const port = 5000;  // Port for your backend server

// Enable CORS for React to make requests
app.use(cors());

// PostgreSQL client setup
const pool = new Pool({
  user: 'abene',  // your PostgreSQL username
  host: 'localhost',  // your PostgreSQL server address
  database: 'diregebeya',  // the database you want to connect to
  password: 'abene1234',  // your PostgreSQL password
  port: 5432,  // the port your PostgreSQL server is listening on
});

// Test route to ensure backend is connected to PostgreSQL
app.get('/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error connecting to the database');
  }
});

// Start the backend server
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
