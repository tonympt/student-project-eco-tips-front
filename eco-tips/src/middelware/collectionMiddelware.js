import axios from 'axios';
import {
  GET_ALL_COLLECTION,
  GET_ALL_TAGS,
  SEND_PROPOSAL,
  GET_RANDOM_CARD,
  saveCollection,
  saveAllTags,
  saveRandomCard } from '@/actions/collection';

const collectionMiddelware = (store) => (next) => (action) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  switch (action.type) {
    case GET_ALL_COLLECTION:
      axios
        .get(`${apiUrl}/me/collection`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(saveCollection(res.data));
        })
        .catch((err) => console.log(err))
        .finally();
      break;
    case GET_ALL_TAGS:
      axios
        .get(`${apiUrl}/tag`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          console.log(res.data);
          store.dispatch(saveAllTags(res.data));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally();
      break;
    case SEND_PROPOSAL: {
      const { formValues } = action;
      axios
        .post(`${apiUrl}/me/proposal`, formValues, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(saveAllTags(res.data));
        })
        .catch((err) => console.log(err))
        .finally();
    }
      break;
    case GET_RANDOM_CARD:
      axios
        .get(`${apiUrl}/me/collection/card`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(saveRandomCard(res.data));
        })
        .catch((err) => console.log(err))
        .finally();
      break;
    default:
  }

  next(action);
};

export default collectionMiddelware;
