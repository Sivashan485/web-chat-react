const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const winston = require('winston');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'web_chat',
  password: 'Asdf1234',
  port: 5432,
});

// Configure winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM public.usermanagement WHERE name = $1 AND password = $2',
      [username, password]
    );
    if (result.rows.length > 0) {
      res.json({ message: true });
    } else {
      res.status(401).json({ message: false});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

