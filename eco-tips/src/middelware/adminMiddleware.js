/* eslint-disable max-len */
import axios from 'axios';
import { GET_ALL_PROPOSALS,
  ADD_PROPOSAL_TO_COLLECTION,
  DELETE_PROPOSAL,
  saveAllProposals } from '@/actions/admin';
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
    case ADD_PROPOSAL_TO_COLLECTION: {
      const { cardId } = action;
      store.dispatch(loadApiRequest());
      axios
        .patch(`${apiUrl}/proposal/${cardId}`, {}, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          console.log(res);
          store.dispatch(loadRequestSuccess(res.statusText, res.status));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally(); }
      break;
    case DELETE_PROPOSAL: {
      const { cardId } = action;
      store.dispatch(loadApiRequest());
      axios
        .delete(`${apiUrl}/card/${cardId}`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(loadRequestSuccess(res.statusText, res.status));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally(); }
      break;
    default:
  }

  next(action);
};

export default adminMiddleware;
