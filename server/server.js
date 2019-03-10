const http = require('http');
const parseUrl = require('parseurl');
const port = process.env.PORT || 5000;
const routing = require('./routing/routing');


const start = http.createServer((req, res) => {
  const url = parseUrl(req);

  routing.getHandler(url.pathname)
    .handle(url, req, res);
})
  .listen(port, () => console.log(`Coinsson server listening on port ${port}`));

module.exports = start;
