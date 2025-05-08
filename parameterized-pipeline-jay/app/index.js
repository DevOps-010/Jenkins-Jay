// Importing required modules
const express = require('express');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Basic route to check the app is running
app.get('/', (req, res) => {
    res.send('Hello, welcome to Jay\'s Parameterized Build Pipeline!');
});

// Environment-based configuration route
app.get('/config', (req, res) => {
    res.json({
        environment: process.env.NODE_ENV,
        dbHost: process.env.DB_HOST,
        dbPort: process.env.DB_PORT,
        dbUser: process.env.DB_USER
    });
});

// Start the server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
