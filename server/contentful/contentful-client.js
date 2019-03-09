import { createClient } from 'contentful-management';
import dotenv from 'dotenv';

dotenv.config();
const { CONTENTFUL_API_KEY, CONTENTFUL_SPACE_ID } = process.env;

const client = createClient({
  accessToken: CONTENTFUL_API_KEY
});

const contentfulSpace = client.getSpace(CONTENTFUL_SPACE_ID);

export default contentfulSpace;
