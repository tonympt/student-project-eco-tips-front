import axios from 'axios';
import { SUBMIT_LOGIN, saveAuthData } from '@/actions/user';
import { redirect } from '@/actions/ui';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user;
      axios
        .post('http://pauline-cauty.vpnuser.lan:3000/sign-in', { email, password })
        .then((res) => {
          const { firstname, accessToken: token } = res.data;
          window.localStorage.setItem('token', token);
          store.dispatch(saveAuthData(firstname, token));
          store.dispatch(redirect('/'));
        })
        .catch((err) => console.log(err))
        .finally();
    }
      break;
    default:
  }

  next(action);
};

export default authMiddleware;
