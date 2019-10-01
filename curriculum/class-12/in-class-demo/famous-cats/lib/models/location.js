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

// schema.static('addShow', function(id, show) {
//   //...
// });

schema.statics = {
  addShow(id, show) {
    return this.updateById(
      id,
      {
        $push: {
          shows: show
        }
      }
    )
      .then(location => location.shows);
  },

  removeShow(id, showId) {
    return this.updateById(id, {
      $pull: {
        shows: { _id: showId }
      }
    })
      .then(location => location.shows);
  },

  updateShowName(id, showId, name) {
    return this.updateOne(
      { _id: id, 'shows._id': showId },
      {
        $set: {
          'shows.$.name': name
        }
      }
    )
      .then(location => location.shows);
  }
};

module.exports = mongoose.model('Location', schema);