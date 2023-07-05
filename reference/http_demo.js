const http = require("http");

// Create server object
http.createServer((req, res) => {
    // When we get the req = request => Write response
    res.write("Hello World"); // this is just the output to the browser
    res.end();
}).listen(5000, () => console.log("Server running...")); // in order for this to run we need to listen on a port
