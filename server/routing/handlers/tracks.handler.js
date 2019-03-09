import {
  getTracks,
  getAllQuests,
  getTrackQuests,
  getAllTracks
} from '../../contentful/contentful';
import { sendSuccess, sendServerError } from './send-response';

export const getTracksHandler = (_, __, res) =>
  getTracks()
    .then(tracks => sendSuccess(res, tracks))
    .catch(err => sendServerError(res, err));

export const getAllQuestsHandler = (_, __, res) =>
  getAllQuests()
    .then(quests => sendSuccess(res, quests))
    .catch(err => sendServerError(res, err));

export const getAllTracksHandler = (_, __, res) =>
  getAllTracks()
    .then(tracks => sendSuccess(res, tracks))
    .catch(err => sendServerError(res, err));

export const getTrackQuestsHandler = (url, _, res) => {
  const trackId = url.query;
  return getTrackQuests(trackId)
    .then(quests => sendSuccess(res, quests))
    .catch(err => sendServerError(res, err));
};
