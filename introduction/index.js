const http = require('http');

const hostname = '127.0.0.1'; // Or '0.0.0.0' for access from other devices
const port = 3000;

const server = http.createServer((req, res) => {
    // Get the URL path from the request
    const path = req.url;

    // Set the default response code
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Route handling
    if (path === '/home') {
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home Page</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #333; }
                </style>
            </head>
            <body>
                <h1>Welcome to the Home Page!</h1>
                <p>This is the home page of our simple Node.js server.</p>
                <a href="/about">Go to About Page</a>
            </body>
            </html>
        `);
    } else if (path === '/about') {
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>About Page</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #333; }
                </style>
            </head>
            <body>
                <h1>About Us</h1>
                <p>This page provides information about our Node.js server.</p>
                <a href="/home">Go to Home Page</a>
            </body>
            </html>
        `);
    } else {
        // Handle 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>404 Not Found</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: red; }
                </style>
            </head>
            <body>
                <h1>404 Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <a href="/home">Go to Home Page</a>
            </body>
            </html>
        `);
    }
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});