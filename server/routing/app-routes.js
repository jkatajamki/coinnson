const HelloWorldHandler = require('./handlers/hello-world.handler');

const routes = [
  { path: '/helloworld', handler: HelloWorldHandler },
];

module.exports = { routes };
