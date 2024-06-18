const axios = require('axios');
const dotenv = require('dotenv');
const { WORKFLOW_CONSTANT } = require('./WorkFlow.constant');

dotenv.config();

const triggerWorkflow = async (nodes) => {
  try {
    const evaluateConditionNode = nodes.find(node => node.type === 'split');

    if (!evaluateConditionNode) {
      throw new Error('Evaluate Condition node not found');
    }

    const condition = evaluateConditionNode.data.condition.toLowerCase();

    if (condition === 'yes') {
      const smsNode = nodes.find(node => node.type === 'sendSMS');
      if (smsNode) {
        await axios.post(`http://localhost:${process.env.PORT}/api/sms/send`, {
          to: process.env.CLIENT_PHONE_NUMBER,
          message: WORKFLOW_CONSTANT.SMS.REMINDER_MSG,
        });
        console.log('SMS sent');
      } else {
        console.log('SMS node not found');
      }
    } else if (condition === 'no') {
      const emailNode = nodes.find(node => node.type === 'sendEmail');
      if (emailNode) {
        await axios.post(`http://localhost:${process.env.PORT}/api/email/send`, {
          to: process.env.RECIPIENT_EMAIL,
          subject: `Hello Nizamul 👋🏻`,
          text: WORKFLOW_CONSTANT.EMAIL.LAST_CALL_REMAINDER,
        });
        console.log('Email sent');
      } else {
        console.log('Email node not found');
      }
    } else {
      console.log('Invalid condition');
      throw new Error('Invalid condition');
    }

    return WORKFLOW_CONSTANT.WORKFLOW_TEST_PASSED;
  } catch (error) {
    console.error('Workflow failed:', error.message);
    throw new Error('Workflow failed');
  }
};

module.exports = { triggerWorkflow };
