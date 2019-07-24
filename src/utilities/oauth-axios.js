import axios from 'axios';
import store from '@/store.js';
// OAUTH 相關 api
const oauthRequest = axios.create({
  baseURL: 'http://localhost:8000/'
});

oauthRequest.interceptors.request.use(function (config) {
  store.commit('setLoading');
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
  store.commit('setLoading');
  return response;
}, function (error) {
  store.commit('setLoading');
  return Promise.reject(error);
});

export default oauthRequest;
