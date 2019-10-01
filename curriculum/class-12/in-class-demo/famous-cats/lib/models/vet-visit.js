const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const schema = new Schema({
  date: {
    type: Date,
    required: true
  },
  cat: {
    type: ObjectId,
    ref: 'Cat'
  }
});

module.exports = mongoose.model('VetVisit', schema);
