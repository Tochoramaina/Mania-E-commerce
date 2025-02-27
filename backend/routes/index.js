const express = require('express');

const router = express.Router();
const userSignUpController = require('../controllers/UserSignup')
const userSignInController = require('../controllers/userSignin')
router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
module.exports = router