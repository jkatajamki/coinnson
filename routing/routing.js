const Four04Handler = require('./handlers/four04.handler');
const appRoutes = require('./app-routes');

const getHandler = (path) => {
  const route = appRoutes.routes.find(route => route.path === path);

  return (route && route.handler) ? route.handler : Four04Handler;
};

module.exports = { getHandler };
