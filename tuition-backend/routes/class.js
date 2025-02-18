const express = require("express");
const router = express.Router();
const classController = require('../controllers/class')

const checkAuth = require('../middleware/check-auth');

router.get('/class', classController.get_all_class);

router.post('/class',checkAuth,classController.create_class);

router.get('/:classid',checkAuth, classController.get_one_class)

module.exports = router;