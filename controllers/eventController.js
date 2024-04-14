const Event = require('../models/eventModel');

// Získání všech událostí
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllEvents
};