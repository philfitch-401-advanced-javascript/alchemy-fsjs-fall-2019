const request = require('superagent');

const getRate = (base, denomination) => {
  return request(`https://api.ratesapi.io/api/latest?base=${base}`)
    .then(res => res.body.rates[denomination]);
}

module.exports = {
  getRate
};
