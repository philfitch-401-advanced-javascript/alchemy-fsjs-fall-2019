const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');

const schema = new Schema({
  name: RequiredString,
  type: { type: String },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lives: {
    type: Number,
    required: true,
    default: 9,
    min: 0,
    max: 9
  },
  hasSidekick: {
    type: Boolean,
    default: false
  },
  media: [{
    type: String,
    enum: ['movies', 'comics', 'tv', 'internet']
  }],
  year: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Cat', schema);