const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const emailRoutes = require('./routes/emailRoutes');
const smsRoutes = require('./routes/smsRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', emailRoutes);
app.use('/api', smsRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
