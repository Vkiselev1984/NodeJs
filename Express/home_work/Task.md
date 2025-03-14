# Task

Write an HTTP server on express and implement two handlers “/” and “/about”, where:

- Each page has a view counter
- The counter value must be saved to a file every time the page is refreshed
- The counter value must also be loaded from a file when the page handler is launched
- This way the counter should not be reset every time the server is restarted.

## Solution

### Installing dependencies:

```bash
npm init -y
npm install express fs
```

### Create a file server.js

1. Import modules: Use express to create the server and fs to work with the file system.
2. Define the port and path to the file with counters using constants.
3. Add the loadCounters() function to load counters from the file if the file exists. If the file does not exist, returns an object with zero counters for both routes.
4. Add the saveCounters(counters) function, which saves the current counters to a file in JSON format.
5. In the route handlers for / and /about, the corresponding counter is incremented, saved to the file, and a response with the number of views is sent.
6. Start the server: The server is started on the specified port.

### Start the server

The server is started on the specified port with the command:

```bash
node server.js
```
