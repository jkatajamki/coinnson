import * as http from 'http';
import parseurl from 'parseurl';
import { getHandler } from './routing/routing';

const port = process.env.PORT || 5000;

http.createServer((req, res) => {
  const url = parseurl(req);

  getHandler(url.pathname)(url, req, res);
})
  .listen(port, () => console.log(`Coinsson server listening on port ${port} ♪♫♫♪`));
