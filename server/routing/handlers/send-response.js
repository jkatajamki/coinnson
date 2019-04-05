export const sendSuccess = (res, content) => {
  console.log('content', content)
  res.status = 200;
  const body = JSON.stringify(content);
  res.end(body);
};

export const sendServerError = (res, err) => {
  res.status = 500;
  // TODO:
  // if env is not development, do not send error stack
  console.error('Error:', err)
  const body = JSON.stringify(err);
  res.end(body);
};

export const sendNotFound = (res) => {
  res.status = 404;
  const body = 'Not found';
  res.end(body);
};
