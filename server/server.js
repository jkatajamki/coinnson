import * as http from 'http';
import parseurl from 'parseurl';
import { getHandler } from './routing/routing';

const port = process.env.PORT || 5000;

http.createServer((req, res) => {
  const requestUrl = parseurl(req);
  const handler = getHandler(requestUrl.pathname);
  handler(requestUrl, req, res);
})
  .listen(port, () => console.log(`Coinsson server listening on port ${port} ♪♫♫♪`));
