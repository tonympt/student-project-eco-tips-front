/* eslint-disable max-len */
import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_SIGNUP, FETCH_PROFILE_DATA, saveAuthData, resetAllData, saveProfileData } from '@/actions/user';
import { redirect } from '@/actions/ui';
import { loadApiRequest, loadTRequestError, loadRequestSuccess } from '@/actions/apiMessages';

const authMiddleware = (store) => (next) => (action) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user;
      store.dispatch(loadApiRequest());
      axios
        .post(`${apiUrl}/sign-in`, { email, password })
        .then((res) => {
          const { firstname, accessToken: token } = res.data;
          window.localStorage.setItem('token', token);
          store.dispatch(saveAuthData(firstname, token));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
    } break;
    case SUBMIT_SIGNUP: {
      const { email, password, confirmpassword, firstname, lastname, birthdate } = store.getState().user;
      store.dispatch(loadApiRequest());
      axios
        .post(`${apiUrl}/sign-up`, { email, password, confirmpassword, firstname, lastname, birthdate })
        .then((res) => {
          store.dispatch(resetAllData());
          store.dispatch(redirect('/sign-in'));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
    }
      break;
    case FETCH_PROFILE_DATA:
      store.dispatch(loadApiRequest());
      axios
        .get(`${apiUrl}/me/user`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(saveProfileData(res.data));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
      break;
    default:
  }

  next(action);
};

export default authMiddleware;
