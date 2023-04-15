import axios from 'axios';
import { SUBMIT_LOGIN } from '@/actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user;
      axios
        .post('http://localhost:XXXX/sign-in', { email, password })
        .then((res) => {
          const { pseudo, token, logged } = res.data;
          // // save token on localstorage
        // window.localStorage.setItem("token", token);
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
