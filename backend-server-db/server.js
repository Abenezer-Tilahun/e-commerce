const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcryptjs');
// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());
app.use(express.json()); // For parsing application/json

// PostgreSQL client setup
const pool = new Pool({
  user: 'abene',
  host: 'localhost',
  database: 'diregebeya',
  password: 'abene1234',
  port: 5432,
});

// Register Route
app.post('/register', async (req, res) => {
  const {
    name, email, phone, password,
  } = req.body;

  try {
    // Check if the email or phone number already exists in the User table
    const emailResult = await pool.query('SELECT * FROM "User" WHERE email = $1', [email]);
    const phoneResult = await pool.query('SELECT * FROM "User" WHERE phone = $1', [phone]);

    if (emailResult.rows.length > 0) {
      return res.status(400).json({ message: 'Email is already taken' });
    }
    if (phoneResult.rows.length > 0) {
      return res.status(400).json({ message: 'Phone number is already taken' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user details into the User table
    const userResult = await pool.query(
      'INSERT INTO "User" (name, email, phone) VALUES ($1, $2, $3) RETURNING id',
      [name, email, phone],
    );
    const userId = userResult.rows[0].id;

    // Generate a unique id for UserAuth
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    const { v4: uuidv4 } = require('uuid');
    const userAuthId = uuidv4();

    // Set provider value (you can customize this as needed)
    const provider = 'LOCAL'; // Can be 'google', 'facebook', etc. based on your auth flow

    // Insert hashed password into the UserAuth table with provider
    await pool.query(
      'INSERT INTO "UserAuth" (id, "userId", provider, password) VALUES ($1, $2, $3, $4)',
      [userAuthId, userId, provider, hashedPassword],
    );

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', details: err.message });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    // Query to find user by email or phone number
    const result = await pool.query(
      'SELECT u.id, u.name, u.email, u.phone, ua.password FROM "User" u INNER JOIN "UserAuth" ua ON u.id = ua."userId" WHERE u.email = $1 OR u.phone = $2',
      [emailOrPhone, emailOrPhone],
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = result.rows[0];

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user.id }, 'yourSecretKey', { expiresIn: '1h' });

    // Return the token to the client
    return res.json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', details: err.message });
  }
});

// Start the backend server
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
