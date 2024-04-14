const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  date: Date,
  location: String,
  description: String,
  attendees: [String]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;