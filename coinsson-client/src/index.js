import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjrp5tohk66o201el1evjlxko/master';

const client = new ApolloClient({
  uri: GRAPHCMS_API,
  fetchOptions: {
    credentials: 'include'
  },
  request: async (operation) => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiNWNkNDMzMTgtNTcwNi00ZmVmLWE0OTctZDQzMGVjODdkMDc3In0.zwM6u98kIpus4wgpkGjPtt1867v9Wtwb4HryNd7uyFU';
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
