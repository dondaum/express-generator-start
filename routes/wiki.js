// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// wiki/About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

// get the wiki help page route
router.get('/help', function (req, res){
  res.json()
//  res.send('This is the help page route of wiki main routes');
})

module.exports = router;
