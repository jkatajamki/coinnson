const handle = (url, req, res) => {
  res.status = 404;
  res.end('Not found');
};

module.exports = { handle };
