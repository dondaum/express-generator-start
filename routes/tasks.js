var express = require('express');
var router = express.Router();
var models = require('../models');

/* POST new task. */
router.post('/', function(req, res) {
  models.task.create({
    name: req.body.taskname,
    priority: req.body.taskpriority,
    due_date: req.body.taskduedate
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
