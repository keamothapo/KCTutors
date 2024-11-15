// app.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors({ origin: 'http://localhost:5173' }));  // Allows requests from your front-end
app.use(express.json());  // Allows parsing JSON requests

// Sample routes
app.get('/', (req, res) => {
  res.send('Welcome to the tutoring company API');
});

app.post('/api/auth', (req, res) => {
  // Handle user authentication
  res.send('User authenticated');
});

app.post('/api/bookings', (req, res) => {
  // Handle lesson booking
  res.send('Lesson booked');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
