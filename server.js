const http = require('http');
const parseUrl = require('parseurl');

const routing = require('./routing/routing');

const start = http.createServer((req, res) => {
  const url = parseUrl(req);

  routing.getHandler(url.pathname)
    .handle(url, req, res);
})
  .listen(8080, () => console.log('coinsson listening on port 8080'));

module.exports = start;
