const express = require('express');
const router = express.Router();

router.get('/support', function(req, res) {
    res.render('support', {title: 'Support Center'});
});

module.exports = router;
