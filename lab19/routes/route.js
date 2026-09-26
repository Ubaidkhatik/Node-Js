

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Welcome to Adventure Trails Application");
});

router.get('/trails', (req, res) => {
    res.send("List of Adventure Trails");
});


router.get('/booking', (req, res) => {
    res.send("Trail Booking Page");
});


router.get('/contact', (req, res) => {
    res.send("Contact Adventure Trails Team");
});

module.exports = router;