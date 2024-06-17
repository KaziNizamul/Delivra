const Mailjet = require('node-mailjet');

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET,
);

const sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: process.env.EMAIL,
            Name: "Your Name",
          },
          To: [
            {
              Email: to,
              Name: "Recipient Name",
            },
          ],
          Subject: subject,
          TextPart: text,
        },
      ],
    });

  request
    .then((result) => {
      console.log(result.body);
      res.status(200).send('Email sent');
    })
    .catch((err) => {
      console.log(err.statusCode);
      res.status(500).send('Error sending email');
    });
};

module.exports = {
  sendEmail,
};
