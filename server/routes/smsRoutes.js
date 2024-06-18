const express = require('express');
const { triggerSMS } = require('../controllers/smsController');

const router = express.Router();

router.post('/send', triggerSMS);

module.exports = router;
