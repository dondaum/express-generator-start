var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
   models.task.findAll().then(function(tasks) {
    res.render('index', {
      title: 'Find all the different tasks here',
      tasks: tasks
    });
  });
});

module.exports = router;
