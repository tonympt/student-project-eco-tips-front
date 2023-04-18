/* eslint-disable max-len */
import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_SIGNUP } from '@/actions/user';
import { SUBMIT_LOGIN, saveAuthData } from '@/actions/user';
import { redirect } from '@/actions/ui';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user;
      axios
        .post('http://pauline-cauty.vpnuser.lan:3000/sign-in', { email, password })
        .then((res) => {
          const { pseudo, token, logged } = res.data;
          // // save token on localstorage
          // window.localStorage.setItem("token", token);
          store.dispatch(redirect('/'));
        })
        .catch((err) => console.log(err))
        .finally();
    } break;
    case SUBMIT_SIGNUP: {
      const { email, password, confirmpassword, firstname, lastname, birthdate } = store.getState().user;
      console.log(email, password, confirmpassword, firstname, lastname, birthdate);
      axios
        .post('http://localhost:XXXX/sign-in', { email, password, confirmpassword, firstname, lastname, birthdate })
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
