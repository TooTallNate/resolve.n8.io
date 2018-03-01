const { parse } = require('url');
const resolve = require('@zeit/dns-cached-resolve');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const parsed = parse(req.url);
  const host = parsed.pathname.substring(1).trim();
  if (!host) {
    res.statusCode = 404;
    res.end();
  }
  console.log('Resolving %j', host);
  try {
    const ip = await resolve(host);
    return ip;
  } catch (err) {
    if (err.code === 'ENOTFOUND') {
      res.statusCode = 404;
      res.end();
    } else {
      throw err;
    }
  }
};
