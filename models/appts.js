var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as tudent doc.
// ÷\]There is no model and no 'facts' collection

var apptSchema = new mongoose.Schema({
  date: Number,
  time: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Appt', apptSchema);