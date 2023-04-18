/* eslint-disable max-len */
import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_SIGNUP, saveAuthData, resetAllData } from '@/actions/user';
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
    } break;
    case SUBMIT_SIGNUP: {
      const { email, password, confirmpassword, firstname, lastname, birthdate } = store.getState().user;
      console.log(email, password, confirmpassword, firstname, lastname, birthdate);
      axios
        .post('http://pauline-cauty.vpnuser.lan:3000/sign-up', { email, password, confirmpassword, firstname, lastname, birthdate })
        .then((res) => {
          store.dispatch(resetAllData());
          store.dispatch(redirect('/sign-in'));
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
