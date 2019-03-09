import { helloWorldHandler } from './handlers/hello-world.handler';

const appRoutes = [
  { path: '/helloworld', handler: helloWorldHandler },
];

export default appRoutes;
