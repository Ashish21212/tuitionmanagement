const express = require("express");
const router = express.Router();

const userController = require('../controllers/user')
const checkAuth = require('../middleware/check-auth');
const {signupValidation,loginValidation} = require('../middleware/auth-validation');


router.post('/signup', signupValidation, userController.users_create_sign);

router.post('/login', loginValidation, userController.users_login);

router.delete('/:userId',checkAuth, userController.user_delete);

module.exports = router;