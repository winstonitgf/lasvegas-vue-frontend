import { apiValidateToken } from '@/apis/oauth-api.js';
import store from '@/store.js';
import { storeAuthIsLogingPath, storeAuthSetLogingPath } from './config';

export default function (to, from, next) {
  // 先看一下 login status 的狀態，如果已登入過就直接通過
  if (store.getters[storeAuthIsLogingPath]) {
    next();
  } else {
    // 看一下有沒有token，沒有的話回到登入畫面
    let token = localStorage.getItem("api_token");
    if (token == null) {
      next('/login');
      return;
    }
    // 檢查token是否合法，否則回到登入畫面
    apiValidateToken({ apiToken: token })
      .then(res => {
        store.dispatch(storeAuthSetLogingPath)
        next();
      })
      .catch(err => {
        console.log(err.response);
        next('/login');
      })
  }
}
