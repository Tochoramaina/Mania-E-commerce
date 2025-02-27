const express = require('express');

const router = express.Router();
const userSignUpController = require('../controllers/UserSignup')
router.post('/signup', userSignUpController)
module.exports = router