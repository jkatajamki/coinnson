const Four04Handler = require('./handlers/four04.handler');
const appRoutes = require('./app-routes');

const getHandler = (path) => {
  const foundRoute = appRoutes.routes.find(route => route.path === path);

  return (foundRoute && foundRoute.handler) ? foundRoute.handler : Four04Handler;
};

module.exports = { getHandler };
