const handle = (url, req, res) => {
  res.status = 200;
  res.end('Hello world!');
};

module.exports = { handle };
