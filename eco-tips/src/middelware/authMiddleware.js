import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SUBMIT_LOGIN } from '@/actions/user';
import { redirect } from '@/actions/ui';

const authMiddleware = (store) => (next) => (action) => {
  const dispatch = useDispatch();
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user;
      axios
        .post('http://localhost:XXXX/sign-in', { email, password })
        .then((res) => {
          const { pseudo, token, logged } = res.data;
          // // save token on localstorage
          // window.localStorage.setItem("token", token);
          dispatch(redirect('/'));
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
