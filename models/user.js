const mongoose = require('mongoose')
// const Portfolio = require('./portfolio')
const Schema = mongoose.Schema



const portfolioSchema = new Schema({
  address: String,
  city: {
    type: String,
    enum: ['Austin', 'Cedar Park']
  },
  state: String,
  date: { 
    type: String, },
 
}, {
  timestamps: true
})

var userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    portfolio: [portfolioSchema]
},
{
  timestamps: true
});
  

module.exports = mongoose.model('User', userSchema);