const mongoose = require('mongoose')
// const Portfolio = require('./portfolio')
const Schema = mongoose.Schema

const stockSchema = new Schema({
  name: String,
  oPrice: Number,
  yClose: Number,
  volume: Number
}, {
  timestamps: true
})

const portfolioSchema = new Schema({
  address: String,
  city: {
    type: String,
    enum: ['Austin', 'Cedar Park']
  },
  state: String,
  date: { 
    type: String, },
  stock: [stockSchema]
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