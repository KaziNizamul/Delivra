const twilio = require('twilio');
const dotenv = require('dotenv');
const { WORKFLOW_CONSTANT } = require('../WorkFlow.constant');

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = async (to, message) => {
  console.log({ to, message })
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
    return WORKFLOW_CONSTANT.SMS.SMS_SENT_SUCCESSFULLY;
  } catch (error) {
    console.log('failed msg sending')
    throw new Error(WORKFLOW_CONSTANT.SMS.FAILED_TO_SEND_SMS);
  }
};

module.exports = { sendSMS };
