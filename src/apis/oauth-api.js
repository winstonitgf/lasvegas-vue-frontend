import oauthRequest from '@/utilities/oauth-axios';

// User 相關的 api
export const apiUserLogin = data => oauthRequest.post('/login', data);
export const apiOtpValidate = data => oauthRequest.post('/api/totp/validateTOTPCode', data);
export const apiValidateToken = data => oauthRequest.post('/api/auth/validateToken', data);
export const apiAuthUser = () => oauthRequest.get('/api/auth/authUser');
export const apiLogout = id => oauthRequest.post('/api/auth/logout/' + id);
