const express = require('express');
const app = express();

// Import routes
const routes = require('./routes/route');

// Use routes
app.use('/', routes);

// Start server
app.listen(3000, () => {
    console.log("Adventure Trails Server running at http://localhost:3000");
});