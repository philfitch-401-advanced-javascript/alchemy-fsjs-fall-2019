const mongoose = require('mongoose');

const updateOptions = {
  // what options do we want?
};

const updateById = schema => {
  schema.static('updateById', (id, update) => {
    return this.findByIdAndUpdate(id, update, updateOptions);
  });
};

const updateOne = schema => {
  schema.static('updateOne', (query, update) => {
    return this.findOneAndUpdate(query, update, updateOptions);
  });
};

const exists = schema => {
  schema.static('exists', (query) => {
    return this.find(query)
      .count()
      .then(count => count > 0);
  });
};

mongoose.plugin(updateById);
mongoose.plugin(updateOne);
mongoose.plugin(exists);