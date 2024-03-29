import axios from 'axios';

const baseUrl = 'http://localhost:4000';

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    contentType: 'application/json'
  }
});

export const endpoints = {
  products: '/products'
};

const withQueryString =
  (endpoint: string): Function =>
  (queryString: string): string | void => {
    if (queryString) {
      return `${endpoint}${queryString}`;
    }

    return endpoint;
  };

const API = {
  products: {
    async get(id: number | string) {
      return await instance.get(`${endpoints.products}/${id}`);
    },
    async all(queryString?: string) {
      const url = withQueryString(endpoints.products)(queryString);

      return await instance.get(url);
    }
  }
};

export default API;
