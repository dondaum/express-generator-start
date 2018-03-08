var express = require('express');
var router = express.Router();

// Require controller modules.
var task_controller = require('../controllers/taskController');

/// BOOK ROUTES ///

// GET task home page.
router.get('/', task_controller.index);

module.exports = router;
