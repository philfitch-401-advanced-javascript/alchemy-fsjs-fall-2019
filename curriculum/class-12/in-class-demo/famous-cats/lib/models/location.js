const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');

const schema = new Schema({
  name: RequiredString,
  address: String,
  location: {
    latitude: Number,
    longitude: Number
  },
  shows: [{
    name: RequiredString,
    date: {
      type: Date,
      default: () => new Date()
    }
  }]
});

module.exports = mongoose.model('Location', schema);