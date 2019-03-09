export const helloWorldHandler = (_, __, res) => {
  res.status = 200;
  res.end('Hello world!');
};
