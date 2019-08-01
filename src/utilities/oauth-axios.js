import axios from 'axios';
import store from '@/store.js';
import { loadingStoreActionPath } from './config';

// OAUTH 相關 api
const oauthRequest = axios.create({
  baseURL: 'http://localhost:8000/'
});


oauthRequest.interceptors.request.use(function (config) {
  store.dispatch(loadingStoreActionPath);
  const authToken = localStorage.getItem("api_token");
  if (authToken) {
    config.headers = { "api_token": authToken }
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
oauthRequest.interceptors.response.use(function (response) {
  store.dispatch(loadingStoreActionPath);
  return response;
}, function (error) {
  store.dispatch(loadingStoreActionPath);
  return Promise.reject(error);
});

export default oauthRequest;
