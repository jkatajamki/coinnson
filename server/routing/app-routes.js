import { helloWorldHandler } from './handlers/hello-world.handler';
import { getPointsHandler } from './handlers/points.handler';

const appRoutes = [
  { path: '/helloworld', handler: helloWorldHandler },
  { path: '/content/getPoints', handler: getPointsHandler },
];

export default appRoutes;
