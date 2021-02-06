const express = require('express');
const router = express.Router();

router.get('/projects', (req, res) => {
    res.render('projects', {title: 'Projects'})
})

module.exports = router