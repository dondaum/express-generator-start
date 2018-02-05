var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* New user route to get the cool function */
router.get('/cool', function(req, res, next) {
  res.render('cool', { title: 'Cool Area' });
});

module.exports = router;
