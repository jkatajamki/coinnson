import {
  getTracks,
  getAllQuests,
  getTrackQuests,
  getAllTracks,
  updateQuest,
  updateTrack
} from '../../contentful/contentful';
import { sendSuccess, sendServerError, sendNotFound } from './send-response';
import { parseBody } from './parse-body';

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

export const updateQuestHandler = (_, req, res) => {
  if (req.method !== 'POST') {
    sendNotFound(res);
    return;
  }
  parseBody(req)
    .then((body) => {
      if (!body) {
        sendServerError(res, 'No request body');
        return;
      }

      const data = JSON.parse(body)
      return updateQuest(data.quest)
    })
    .then((data) => sendSuccess(res, data))
    .catch(err => sendServerError(res, err));
};

export const updateTrackHandler = (_, req, res) => {
  if (req.method !== 'POST') {
    sendNotFound(res);
    return;
  }
  parseBody(req)
    .then((body) => {
      if (!body) {
        sendServerError(res, 'No request body');
        return;
      }

      const data = JSON.parse(body)
      return updateTrack(data.track)
    })
    .then((data) => sendSuccess(res, data))
    .catch(err => sendServerError(res, err));
};
