import oauthRequest from '@/utilities/oauth-axios';

// User 相關的 api
export const apiUserLogin = data => oauthRequest.post('/login', data);
export const apiOtpValidate = data => oauthRequest.post('/api/validateTOTPCode', data);
export const apiValidateToken = data => oauthRequest.post('/api/validateToken', data);
export const apiAuthUser = () => oauthRequest.get('/api/authUser');
export const apiLogout = id => oauthRequest.post('/api/logout/' + id);
