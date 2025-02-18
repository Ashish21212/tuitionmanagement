const express = require("express");
const router = express.Router();

const userController = require('../controllers/user')
const checkAuth = require('../middleware/check-auth');


router.post('/signup',userController.users_create_sign);

router.post('/login',userController.users_login);

router.delete('/:userId',checkAuth, userController.user_delete);

module.exports = router;