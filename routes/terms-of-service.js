const express = require('express');
const router = express.Router();

router.get('/terms-of-service', function(req, res) {
    res.render('terms-of-service', {title: 'Terms of Service'});
});

module.exports = router;
