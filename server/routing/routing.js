import appRoutes from './app-routes';
import { four04Handler } from './handlers/four04.handler';

export const getHandler = (path) => {
  const foundRoute = appRoutes.find(route => route.path === path);

  return (foundRoute && foundRoute.handler) ? foundRoute.handler : four04Handler;
};
