const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');
const smsRoutes = require('./routes/smsRoutes');
const workflowRoutes = require('./routes/workflowRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/email', emailRoutes);
app.use('/api/sms', smsRoutes);
app.use('/api/workflow', workflowRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
