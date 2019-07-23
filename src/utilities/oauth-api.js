import axios from 'axios';

// OAUTH 相關 api
const oauthRequest = axios.create({
  baseURL: 'http://localhost:8000/'
});

oauthRequest.interceptors.request.use(function (config) {
  const authToken = localStorage.getItem("api_token");
  if (authToken) {
    config.headers = { "api_token": authToken }
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
oauthRequest.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

// User 相關的 api
export const apiUserLogin = data => oauthRequest.post('/login', data);
export const apiOtpValidate = data => oauthRequest.post('/api/validateTOTPCode', data);
export const apiValidateToken = data => oauthRequest.post('/api/validateToken', data);
export const apiAuthUser = () => oauthRequest.get('/api/authUser');
export const apiLogout = id => oauthRequest.post('/api/logout/' + id);
