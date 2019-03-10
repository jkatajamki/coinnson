import { createClient } from 'contentful-management';
import dotenv from 'dotenv';

dotenv.config();
const { CONTENTFUL_API_KEY, CONTENTFUL_SPACE_ID } = process.env;

const client = createClient({
  accessToken: CONTENTFUL_API_KEY
});

const contentfulEnvironment = client.getSpace(CONTENTFUL_SPACE_ID)
  .then((space) => space.getEnvironment('master'))

export default contentfulEnvironment;
