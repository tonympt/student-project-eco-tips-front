/* eslint-disable max-len */
import axios from 'axios';
import { GET_LATEST_CARD, saveLatestCard } from '@/actions/community';
import { loadApiRequest, loadTRequestError, loadRequestSuccess } from '@/actions/apiMessages';
import { askRefresh } from '@/actions/ui';

const communityMiddelware = (store) => (next) => (action) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  switch (action.type) {
    case GET_LATEST_CARD:
      store.dispatch(loadApiRequest());
      axios
        .get(`${apiUrl}/card/latest`, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(saveLatestCard(res.data));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally();
      break;
    default:
  }

  next(action);
};

export default communityMiddelware;
