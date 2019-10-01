const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const { RequiredString, RequiredDate } = require('./required-types');

const schema = new Schema({
  name: RequiredString,
  address: String,
  location: {
    latitude: Number,
    longitude: Number
  },
  shows: [{
    show: {
      type: ObjectId,
      ref: 'Show',
      required: true
    },
    date: RequiredDate
  }]
});

module.exports = mongoose.model('Location', schema);