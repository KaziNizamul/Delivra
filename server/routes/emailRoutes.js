const express = require('express');
const { triggerEmail } = require('../controllers/emailController');

const router = express.Router();

router.post('/send', triggerEmail);

module.exports = router;
