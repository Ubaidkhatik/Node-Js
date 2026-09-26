const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3006;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});

// Dummy credentials
const USERNAME = "admin";
const PASSWORD = "12345";

// Login route
app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username === USERNAME && password === PASSWORD) {
        res.send("<h2>Login Successful</h2>");
    } 
    else {
        res.send("<h2>Invalid Username or Password</h2>");
    }

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});