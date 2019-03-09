import contentfulSpace from './contentful-client';

const getContentfulEntries = (contentType) => contentfulSpace.getEntries({
  content_type: contentType
});

export const getPoints = () => getContentfulEntries('Points');
