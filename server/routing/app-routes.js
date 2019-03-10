import { helloWorldHandler } from './handlers/hello-world.handler';
import { getPointsHandler, resetPointsHandler } from './handlers/points.handler';
import {
  getAllTracksHandler,
  getTrackQuestsHandler,
  getAllQuestsHandler
} from './handlers/tracks.handler';

const appRoutes = [
  { path: '/helloworld', handler: helloWorldHandler },
  { path: '/content/getPoints', handler: getPointsHandler },
  { path: '/content/resetPoints', handler: resetPointsHandler },
  { path: '/content/getAllTracks', handler: getAllTracksHandler },
  { path: '/content/getAllQuests', handler: getAllQuestsHandler },
  { path: '/content/getTrackQuests', handler: getTrackQuestsHandler },
];

export default appRoutes;
