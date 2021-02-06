const express = require('express');
const router = express.Router();

router.get('/discord', (req, res) => {
    res.render('discord', {title: 'Discord'})
})

module.exports = router