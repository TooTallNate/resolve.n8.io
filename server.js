const { resolve4 } = require('mz/dns');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const ips = await resolve4('alias.zeit.co');
  return ips[0];
};
