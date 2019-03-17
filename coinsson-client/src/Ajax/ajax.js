import dotenv from 'dotenv';

dotenv.config();
const { REACT_APP_ENV } = process.env;

const BASE_URL = REACT_APP_ENV === 'dev' ? 'http://localhost' : 'https://coinsson.herokuapp.com/';
const API_PORT = REACT_APP_ENV === 'dev' ? ':5000' : '';
const API_URL = `${BASE_URL}${API_PORT}/api`;

const getHeaders = () => {
  const headers = new Headers();
  headers.append('Accept-Language', 'fi');
  headers.append('Content-Type', 'application/json');
  return headers;
};

const handleResponse = async (response) => {
  const responseBody = response.status === 204 ? '' : await response.json();

  if (!response.ok) {
    throw responseBody;
  }

  return responseBody;
};

const getFetchOptions = (method, data) => ({
  headers: getHeaders(),
  method,
  body: method === 'POST' ? JSON.stringify(data) : null,
});

export default apiCall = (method, path, data = {}) => {
  const options = getFetchOptions(headers, method, data);
  const url = `${API_URL}${path}`;
  return fetch(url, options)
    .then(handleResponse)
    .catch((e) => {
      // TODO: handle fetch error
      console.error('Error in apiCall:', e);
      throw e;
    })
};
