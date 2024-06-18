const { sendSMS } = require('../models/smsModel');
const { WORKFLOW_CONSTANT } = require('../WorkFlow.constant');

const triggerSMS = async (req, res) => {
  const { to, message } = req.body;

  try {
    const result = await sendSMS(to, message);
    res.status(200).send({ message: result });
  } catch (error) {
    res.status(500).send({ error: WORKFLOW_CONSTANT.SMS.FAILED_TO_SEND_SMS });
  }
};

module.exports = { triggerSMS };
