const express = require("express");
const router = express.Router();
const classController = require('../controllers/class')

router.get('/class',classController.get_all_class);

router.post('/class',classController.create_class);

router.get('/:classid', classController.get_one_class)

module.exports = router;