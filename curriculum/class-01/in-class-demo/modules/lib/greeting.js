/**
 * 
 * @param {string} name 
 * @returns {string}
 */
const hello = (name) => {
  return `hello ${name}`;
};

const goodbye = (name) => {
  const salutation = name.toLowerCase() === 'pooh' ? 'ttfn' : 'goodbye';
  return `${salutation} ${name}`;
};

module.exports = {
  hello,
  goodbye
};