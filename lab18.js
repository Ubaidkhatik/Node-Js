const fs = require('fs');

const data = "Mongo, Express";

fs.writeFile('src.txt', data, (err) => {
    if (err) {
        console.log("Error creating file");
    } else {
        console.log("File created successfully and data added!");
    }
});