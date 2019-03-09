import contentfulEnv from './contentful-client';

const getContentfulEntries = (contentType) =>
  contentfulEnv.then((env) =>
    env.getEntries({
      'content_type': contentType
    }));

export const getPoints = () => getContentfulEntries('points');
