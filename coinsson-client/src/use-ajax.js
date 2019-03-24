import apiCall from './Ajax/ajax';
import { useState, useEffect } from 'react';

export const useAjax = (path, method, requestData = {}) => {
  const [data, setData] = useState(null);

  const fetchAndSetData = (path, method, requestData) =>
    apiCall(method, path, requestData)
      .then((res) => setData(res));

  useEffect(() => {
    fetchAndSetData(path, method, requestData);
  }, [path]);
  return data;
}