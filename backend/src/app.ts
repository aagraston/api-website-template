// Import dotenv before you launch it
import dotenv from 'dotenv';
// start dotenv! This finds the .env at your root directory
dotenv.config();

import express from 'express';

// Initialize the app
const app = express();

// Middleware

//route for serving the welcome message

// Routes

// Environment variables and server setup
const PORT = process.env.PORT || 5000; // Use the port from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});