
const get = (req, res) => {
  res.end(JSON.stringify([
    { name: 'garfield' },
    { name: 'duchess' },
    { name: 'felix' }
  ]));
};

const post = (req, res) => {
  res.end(JSON.stringify(
    { name: 'garfield' }
  ));
};

const methods = {
  GET: get,
  POST: post
};

module.exports = (req, res) => {
  const handler = methods[req.method];
  handler(req, res);
};