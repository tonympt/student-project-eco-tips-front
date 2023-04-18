/* eslint-disable max-len */
import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_SIGNUP, FETCH_PROFILE_DATA, saveAuthData, resetAllData, saveProfileData } from '@/actions/user';
import { redirect } from '@/actions/ui';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user;
      axios
        .post('http://paulinecty-server.eddi.cloud:8080/sign-in', { email, password })
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
      axios
        .post('http://paulinecty-server.eddi.cloud:8080/sign-up', { email, password, confirmpassword, firstname, lastname, birthdate })
        .then((res) => {
          store.dispatch(resetAllData());
          store.dispatch(redirect('/sign-in'));
        })
        .catch((err) => console.log(err))
        .finally();
    }
      break;
    case FETCH_PROFILE_DATA:
      axios
        .get('http://paulinecty-server.eddi.cloud:8080/me/profile', {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(saveProfileData(res.data));
        })
        .catch((err) => console.log(err))
        .finally();
      break;
    default:
  }

  next(action);
};

export default authMiddleware;
