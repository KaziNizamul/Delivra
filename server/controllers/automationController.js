const Automation = require('../models/Automation');
const sendEmail = require('../services/emailService');

const getAutomations = async (req, res) => {
  try {
    const automations = await Automation.find();
    res.status(200).json(automations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAutomation = async (req, res) => {
  const newAutomation = new Automation(req.body);
  try {
    await newAutomation.save();
    res.status(201).json(newAutomation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAutomation = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAutomation = await Automation.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedAutomation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAutomation = async (req, res) => {
  const { id } = req.params;
  try {
    await Automation.findByIdAndDelete(id);
    res.status(200).json({ message: 'Automation deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAutomations, createAutomation, updateAutomation, deleteAutomation };
