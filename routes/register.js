const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/register', (req, res) => {
    res.render('register', {title: 'Register'})
})

module.exports = router