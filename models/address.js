var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as tudent doc.
// ÷\]There is no model and no 'facts' collection

var addressSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zipCode: Number,
  date: { 
    type: String, 
    
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Address', addressSchema);