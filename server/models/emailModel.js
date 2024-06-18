const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { WORKFLOW_CONSTANT } = require('../WorkFlow.constant');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async (to, subject, text) => {
  console.log({ to, subject, text })
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    return WORKFLOW_CONSTANT.EMAIL.EMAIL_SENT_SUCCESSFULLY;
  } catch (error) {
    console.log('failed email sending')
    throw new Error(WORKFLOW_CONSTANT.EMAIL.FAILED_TO_SEND_EMAIL);
  }
};

module.exports = { sendEmail };
