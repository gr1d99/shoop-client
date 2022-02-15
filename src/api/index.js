import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    contentType: 'application/json'
  }
});

const endpoints = {
  products: '/products'
};

const withQueryString = (endpoint) => (queryString) => {
  if (queryString) {
    return `${endpoint}${queryString}`;
  }

  return endpoint;
};

const API = {
  products: {
    all(queryString) {
      const url = withQueryString(endpoints.products)(queryString);

      return instance.get(url);
    }
  }
};

export default API;
