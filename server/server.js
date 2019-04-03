import * as http from 'http';
import parseurl from 'parseurl';
import { getHandler } from './routing/routing';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;
const { ENV, CLIENT_ORIGIN } = process.env;

function isCorsEnabled() {
  if (ENV.includes('dev') || CLIENT_ORIGIN.includes('coinsson')) {
    return true;
  }

  return false;
}

function mangleCors(res) {
  if (isCorsEnabled()) {
    res.setHeader('Access-Control-Allow-Origin', CLIENT_ORIGIN);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
  }
  return res;
}

http.createServer((req, res) => {
  const requestUrl = parseurl(req);
  const handler = getHandler(requestUrl.pathname);
  handler(requestUrl, req, mangleCors(res));
})
  .listen(port, () => console.log(`Coinsson server listening on port ${port} ♪♫♫♪`));
