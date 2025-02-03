const express = require("express");
const router = express.Router();

const userController = require('../controllers/user')


router.post('/signup',userController.users_create_sign);

router.post('/login',userController.users_login);

router.delete('/:userId', userController.user_delete);

module.exports = router;