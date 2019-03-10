import { getPoints } from '../../contentful/contentful';
import { sendSuccess, sendServerError } from './send-response';

export const getPointsHandler = (_, __, res) =>
  getPoints()
    .then(points => sendSuccess(res, points))
    .catch(err => sendServerError(res, err));