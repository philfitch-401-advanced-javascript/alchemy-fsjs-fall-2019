const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String
  },
  lives: {
    type: Number
  }
});

module.exports = mongoose.model('Cat', schema);