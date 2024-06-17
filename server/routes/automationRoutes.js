const express = require('express');
const { getAutomations, createAutomation, updateAutomation, deleteAutomation } = require('../controllers/automationController');
const router = express.Router();

router.get('/', getAutomations);
router.post('/', createAutomation);
router.put('/:id', updateAutomation);
router.delete('/:id', deleteAutomation);

module.exports = router;
