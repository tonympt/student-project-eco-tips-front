import axios from 'axios';
import {
  GET_ALL_COLLECTION,
  GET_ALL_TAGS,
  SEND_PROPOSAL,
  GET_RANDOM_CARD,
  SAVE_RANDOM_CARD_COLLECTION,
  DELETE_ONE_CARD,
  CHECKED_CARD,
  saveCollection,
  saveAllTags,
  saveRandomCard } from '@/actions/collection';

import { loadApiRequest, loadTRequestError, loadRequestSuccess } from '@/actions/apiMessages';

const collectionMiddelware = (store) => (next) => (action) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  switch (action.type) {
    case GET_ALL_COLLECTION:
      store.dispatch(loadApiRequest());
      axios
        .get(`${apiUrl}/me/collection`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(saveCollection(res.data));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
      break;
    case GET_ALL_TAGS:
      store.dispatch(loadApiRequest());
      axios
        .get(`${apiUrl}/tag`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(saveAllTags(res.data));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
      break;
    case SEND_PROPOSAL: {
      const { formValues } = action;
      store.dispatch(loadApiRequest());
      axios
        .post(`${apiUrl}/me/proposal`, formValues, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(loadRequestSuccess(res.statusText, res.status));
          store.dispatch(saveAllTags(res.data));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
    }
      break;
    case GET_RANDOM_CARD:
      store.dispatch(loadApiRequest());
      axios
        .get(`${apiUrl}/me/collection/card`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(saveRandomCard(res.data));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
      break;
    case SAVE_RANDOM_CARD_COLLECTION: {
      const { formValues } = action;
      store.dispatch(loadApiRequest());
      axios
        .post(`${apiUrl}/me/collection/card`, formValues, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(loadRequestSuccess(res.statusText, res.status));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
    }
      break;
    case DELETE_ONE_CARD: {
      const { idCard } = action;
      store.dispatch(loadApiRequest());
      console.log(`le token de la route delete : ${store.getState().user.token}`);
      axios
        .delete(`${apiUrl}/me/collection/card/${idCard}`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(loadRequestSuccess(res.statusText, res.status));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
    }
      break;
    case CHECKED_CARD: {
      const { idCard } = action;
      store.dispatch(loadApiRequest());
      console.log(`le token de la route patch : ${store.getState().user.token}`);
      axios
        .patch(`http://pauline-cauty.vpnuser.lan:3000/me/collection/card/${idCard}`, {}, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(loadRequestSuccess(res.statusText, res.status));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(loadTRequestError(err.response.data, err.response.status));
        })
        .finally();
    }
      break;
    default:
  }

  next(action);
};

export default collectionMiddelware;
