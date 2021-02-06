const express = require('express');
const router = express.Router();

router.get('/privacy-policy', function(req, res) {
    res.render('privacy-policy', {title: 'Privacy Policy'});
});

module.exports = router;
