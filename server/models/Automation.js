const mongoose = require('mongoose');

const automationSchema = new mongoose.Schema({
  name: String,
  nodes: Array,
  edges: Array,
});

module.exports = mongoose.model('Automation', automationSchema);
