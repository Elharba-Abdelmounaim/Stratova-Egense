require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// إعداد PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'stratova_db',
  password: process.env.DB_PASS || 'ELHARBA123',
  port: process.env.DB_PORT || 5432,
});

// Endpoint Contact Form
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO contacts (name, email, subject, message) VALUES ($1,$2,$3,$4) RETURNING *',
      [name, email, subject, message]
    );
    res.json({ ok: true, contact: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('STRATOVA Backend is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
