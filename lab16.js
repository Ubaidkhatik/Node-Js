
const http = require('http');


const server = http.createServer((req, res) => {

    console.log("Request received from browser");

    res.writeHead(200, { 'Content-Type': 'text/html' });


    let message = "Hello! JavaScript is executed on Node.js Server.";

    
    res.write("<h1>Node.js Web Server</h1>");
    res.write("<p>" + message + "</p>");
    res.end();

});


const PORT = 3003;


server.listen(PORT, () => {
    console.log("Server is running at http://localhost:3003");
});