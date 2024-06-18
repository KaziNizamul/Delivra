const { sendEmail } = require('../models/emailModel');
const { WORKFLOW_CONSTANT } = require('../WorkFlow.constant');

const triggerEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const result = await sendEmail(to, subject, text);
    res.status(200).send({ message: result });
  } catch (error) {
    res.status(500).send({ error: WORKFLOW_CONSTANT.EMAIL.FAILED_TO_SEND_EMAIL });
  }
};

module.exports = { triggerEmail };
