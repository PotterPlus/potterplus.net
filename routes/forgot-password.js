const express = require('express');
const router = express.Router();

router.get('/forgot-password', (req, res) => {
    res.render('forgot-password', {title: 'Forgot Password'})
})

module.exports = router