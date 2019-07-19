import axios from 'axios';

// OAUTH 相關 api
const oauthRequest = axios.create({
  baseURL: 'http://localhost:8000/'
});

// OAUTH 相關 api
const sportLotteryRequest = axios.create({
  baseURL: 'http://localhost:8080/'
});

// User 相關的 api
export const apiUserLogin = data => oauthRequest.post('/login', data);
export const apiOtpValidate = data => oauthRequest.post('/api/validateTOTPCode', data);
export const apiValidateToken = data => oauthRequest.post('/api/validateToken', data);
