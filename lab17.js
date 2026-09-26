                                                                                                                                                                    
const http = require('http');


const server = http.createServer((req, res) => {

    console.log("Request received");

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Node.js Application is Running...");
    res.end();
});
const PORT = 3001;


server.listen(PORT, () => {
    console.log("Server started at http://localhost:3001");
});

process.on('SIGINT', () => {
    console.log("\nApplication stopped. Restart the server...");
    process.exit();
});