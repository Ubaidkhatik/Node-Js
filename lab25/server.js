const express = require("express");
const session = require("express-session");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Session Setup
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true
  })
);

// Home Page
app.get("/", (req, res) => {
  res.send(`
        <h2>Session Management Example</h2>
        <a href="/login">Login</a><br>
        <a href="/dashboard">Dashboard</a><br>
        <a href="/logout">Logout</a>
    `);
});

// Login Page
app.get("/login", (req, res) => {
  res.send(`
        <form action="/login" method="POST">
            Username: <input type="text" name="username"/>
            <button type="submit">Login</button>
        </form>
    `);
});

// Create Session
app.post("/login", (req, res) => {
  const username = req.body.username;

  req.session.user = username;   // Store data in session

  res.send("Login Successful! <br><a href='/dashboard'>Go to Dashboard</a>");
});

// Dashboard (Session Check)
app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.send(`
            Welcome ${req.session.user} <br>
            Session Active ✅ <br>
            <a href="/logout">Logout</a>
        `);
  } else {
    res.send("Please Login First!");
  }
});

// Destroy Session
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Logged Out Successfully!");
  });
});

// Server Start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});