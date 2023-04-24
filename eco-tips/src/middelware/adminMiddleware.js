/* eslint-disable max-len */
import axios from 'axios';
import { GET_ALL_PROPOSALS, saveAllProposals } from '@/actions/admin';
import { loadApiRequest, loadTRequestError, loadRequestSuccess } from '@/actions/apiMessages';

const adminMiddleware = (store) => (next) => (action) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  switch (action.type) {
    case GET_ALL_PROPOSALS:
      store.dispatch(loadApiRequest());
      axios
        .get(`${apiUrl}/proposal`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          console.log(res.data);
          store.dispatch(saveAllProposals(res.data));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
      break;
    default:
  }

  next(action);
};

export default adminMiddleware;
