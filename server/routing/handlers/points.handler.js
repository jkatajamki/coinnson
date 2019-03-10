import { getPoints, resetPoints } from '../../contentful/contentful';
import { sendSuccess, sendServerError } from './send-response';

export const getPointsHandler = (_, __, res) =>
  getPoints()
    .then(points => sendSuccess(res, points))
    .catch(err => sendServerError(res, err));

export const resetPointsHandler = (_, __, res) =>
  resetPoints()
    .then(points => sendSuccess(res, points))
    .catch(err => sendServerError(res, err));
