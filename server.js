const http = require("http");

// Define port number
const port = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

// Start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
