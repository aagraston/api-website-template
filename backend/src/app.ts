// Import dotenv before you launch it
import dotenv from 'dotenv';
import cors from 'cors';
// start dotenv! This finds the .env at your root directory
dotenv.config();

import express from 'express';

// Initialize the app
const app = express();

// Middleware
app.use(cors(
  {
    origin: 'http://localhost:5173',
  }
));

//route for serving the welcome message

// Routes
app.get('/', (req, res) => {
  res.json({
    welcomeMessage: 'Welcome, this data comes from the backend!',
  });
})

// Environment variables and server setup
const PORT = process.env.PORT || 5000; // Use the port from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});