/* eslint-disable max-len */
import axios from 'axios';
import { GET_ALL_PROPOSALS,
  ADD_PROPOSAL_TO_COLLECTION,
  DELETE_PROPOSAL,
  UPDATE_PROPOSAL,
  saveAllProposals } from '@/actions/admin';
import { loadApiRequest, loadTRequestError, loadRequestSuccess } from '@/actions/apiMessages';
import { askRefresh } from '@/actions/ui';

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
          store.dispatch(loadRequestSuccess(res.statusText, res.status, 'La carte a bien été ajouté à la collection globale 🥳 !!!'));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally(() => {
          store.dispatch(askRefresh());
        }); }
      break;
    case DELETE_PROPOSAL: {
      const { cardId } = action;
      store.dispatch(loadApiRequest());
      axios
        .delete(`${apiUrl}/card/${cardId}`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(loadRequestSuccess(res.statusText, res.status, 'La carte a bien été supprimé des propositions'));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally(() => {
          store.dispatch(askRefresh());
        }); }
      break;
    case UPDATE_PROPOSAL: {
      const { formValues, cardId } = action;
      store.dispatch(loadApiRequest());
      axios
        .patch(`${apiUrl}/card/${cardId}`, formValues, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(loadRequestSuccess(res.statusText, res.status, 'La carte a bien été enregistrée dans la collection globale de cartes 😀'));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
    }
      break;
    default:
  }

  next(action);
};

export default adminMiddleware;
