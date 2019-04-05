import contentfulEnv from './contentful-client';

const getContentfulEntries = (contentType) => contentfulEnv
  .then((env) => env.getEntries({
    'content_type': contentType
  }))
  .then(mapFields);

export const filterOutNonEmptyItems = (items) => items.filter((item) => Object.keys(item.fields).length > 0)

export const mapFields = (content) =>
  filterOutNonEmptyItems(content.items).map((item) =>
    Object.keys(item.fields).reduce((fields, key) => ({
      ...fields,
      [key]: item.fields[key]['en-US']
    }), { id: item.sys.id })
  );

export const mapTrackTitleIdForQuest = (content) => {
  return content.map(item => ({
    ...item,
    trackId: item.trackTitle.sys.id,
  }));
};

export const sumPoints = (items) => items.reduce((total, item) => total + item.points, 0);

export const getPoints = () => getContentfulEntries('points')
  .then((response) => {
    const points = sumPoints(response);
    return { points }
  });

export const resetPoints = () => contentfulEnv
  .then((cEnv) => {
    const negatePoints = (points) => points !== 0 ? -points : 0

    return getPoints()
      .then((points) => {
        return cEnv.createEntry('points', {
          fields: {
            points: {
              'en-US': negatePoints(points)
            }
          }
        })
      .then((draft) => cEnv.getEntry(draft.sys.id))
      .then((entry) => entry.publish())
    });
  });

export const getAllTracks = () => getContentfulEntries('track');

export const getAllQuests = () => getContentfulEntries('quest')
  .then(mapTrackTitleIdForQuest);

export const getAllAchievements = () => getContentfulEntries('achievement');

export const getTrackQuests = (trackId) => contentfulEnv
  .then((env) =>
    env.getEntries({
      'content_type': 'quest',
      'fields.trackTitle.sys.id': trackId,
    }))
  .then((content) => {
    const mapped = mapFields(content);
    return mapped.map(item => ({
      ...item,
      trackId: item.trackTitle.sys.id,
    }));
  });

export const updateQuest = (quest) => contentfulEnv
  .then((env) => env.getEntry(quest.id))
  .then((entry) => {
    entry.fields.done['en-US'] = quest.done;
    entry.fields.state['en-US'] = quest.state;
    entry.fields.hidden['en-US'] = quest.hidden;
    entry.fields.highlight['en-US'] = quest.highlight;
    return entry.update();
  })
  .then((data) => {
    const mapped = mapFields({ items: [data] })[0];
    return {
      quest: {
        ...mapped,
        trackId: mapped.trackTitle.sys.id,
      }
    };
  });

export const updateTrack = (track) => contentfulEnv
  .then(env => env.getEntry(track.id))
  .then((entry) => {
    entry.fields.done['en-US'] = track.done;
    entry.fields.hidden['en-US'] = track.hidden;
    return entry.update()
  })
  .then((data) => {
    const track = mapFields({ items: [data] })[0];
    return { track };
  });
