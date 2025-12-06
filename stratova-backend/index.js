require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// أول API
app.get('/', (req, res) => {
  res.json({ ok: true, message: 'STRATOVA Backend is running!' });
});

// تشغيل السيرفر
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
