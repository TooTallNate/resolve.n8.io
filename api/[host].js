const { resolve } = require('dns').promises;

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const { host } = req.query;
  if (!host) {
    res.statusCode = 400;
    res.end('Please provide a hostname');
    return;
  }
  console.log('Resolving %j', host);
  try {
    const ip = await resolve(host);
    res.end(ip[0]);
  } catch (err) {
    if (err.code === 'ENOTFOUND') {
      res.statusCode = 404;
      res.end(`Could not find DNS record for "${host}"'`);
    } else {
      throw err;
    }
  }
};
