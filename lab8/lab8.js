// Node.js program to open a requested file and return its content

const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

    // File to be opened
    fs.readFile('lab8.txt', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('File Not Found');
            return res.end();
        }

        // Send file content to client
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(data);
        res.end();
    });

}).listen(4010);

console.log("Server running at http://localhost:4010/");