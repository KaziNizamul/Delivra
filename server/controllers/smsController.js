const twilio = require('twilio');

const sendSMS = async (req, res) => {
  const { to, text } = req.body;
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    await client.messages.create({
      body: text,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    });
    console.log('SMS sent');
    res.status(200).send('SMS sent');
  } catch (error) {
    console.log('Error sending SMS', error);
    res.status(500).send('Error sending SMS');
  }
};

module.exports = {
  sendSMS,
};
