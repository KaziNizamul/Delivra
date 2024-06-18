const express = require('express');
const { triggerWorkflow } = require('../workflow');

const router = express.Router();

router.post('/trigger', async (req, res) => {
  const { nodes } = req.body;

  console.log({ nodes })
  try {
    const result = await triggerWorkflow(nodes);
    console.log({ result })
    res.status(200).send({ message: result });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
