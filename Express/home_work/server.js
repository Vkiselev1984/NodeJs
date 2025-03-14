const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;
const COUNTER_FILE = path.join(__dirname, 'counters.json');

// Function for loading counters from file
const loadCounters = () => {
    if (fs.existsSync(COUNTER_FILE)) {
        const data = fs.readFileSync(COUNTER_FILE);
        return JSON.parse(data);
    }
    return { '/': 0, '/about': 0 }; // Initialize counters if file does not exist
};

// Function for saving counters to a file
const saveCounters = (counters) => {
    fs.writeFileSync(COUNTER_FILE, JSON.stringify(counters, null, 2));
};

// Load counters when the server starts
let counters = loadCounters();

// Handler for the main page "/"
app.get('/', (req, res) => {
    counters['/'] += 1; // Increment the counter
    saveCounters(counters); // Save counters to a file
    res.send(`<h1>Home page</h1>
<p>Views: ${counters['/']}</p>
<a href="/about">Go to the "About Us" page</a>`);
});

// Handler for the "/about" page
app.get('/about', (req, res) => {
    counters['/about'] += 1; // Increment the counter
    saveCounters(counters); // Save counters to file
    res.send(`<h1>About</h1>
        <p>Views: ${counters['/about']}</p>
        <a href="/">Go to the "Home" page</a>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});