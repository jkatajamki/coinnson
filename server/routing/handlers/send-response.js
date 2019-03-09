export const sendSuccess = (res, content) => {
  res.status = 200;
  const body = JSON.stringify(content);
  res.end(body);
}

export const sendServerError = (res, err) => {
  res.status = 500;
  // TODO:
  // if env is not development, do not send error stack
  const body = JSON.stringify(err);
  res.end(body);
}
