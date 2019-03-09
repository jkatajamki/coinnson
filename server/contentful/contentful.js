import contentfulEnv from './contentful-client';

const getContentfulEntries = (contentType) =>
  contentfulEnv.then((env) =>
    env.getEntries({
      'content_type': contentType
    }));

const mapFields = (content) => {
  const nonEmptyItems = content.items.filter((item) => Object.keys(item.fields).length > 0)
  return nonEmptyItems.map((item) =>
    Object.keys(item.fields).reduce((fields, key) => ({
      ...fields,
      [key]: item.fields[key]['en-US']
    }), { id: item.sys.id })
  );
}

const sumPoints = (pointsContent) => pointsContent.items
  .map(mapFields)
  .reduce((total, item) => total + item.points, 0);

export const getPoints = () => getContentfulEntries('points')
  .then(sumPoints);

export const getAllTracks = () => getContentfulEntries('track')
  .then(mapFields);

export const getAllQuests = () => getContentfulEntries('quest')
  .then(mapFields);

export const getTrackQuests = (trackId) => contentfulEnv
  .then((env) =>
    env.getEntries({
      'content_type': 'quest',
      'fields.trackTitle.sys.id': trackId,
    }))
  .then(mapFields)
