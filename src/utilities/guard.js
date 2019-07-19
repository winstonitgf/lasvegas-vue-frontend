import { apiValidateToken } from '@/utilities/api.js';
import store from '@/store.js';

export default function (to, from, next) {
  if (store.state.isLogin) {
    next();
  } else {
    const token = localStorage.getItem("api_token");
    apiValidateToken({ apiToken: token })
      .then(res => {
        console.log(res);
        store.commit('setLogin')
        next();
      })
      .catch(err => {
        console.log(err.response.status);
        next('/login');
      })
  }
}
