import axios from 'axios';
import {
  SEND_ACHIEVEMENT,
} from '@/actions/achievement';
import { askRefresh } from '@/actions/ui';
import { loadApiRequest, loadTRequestError, loadRequestSuccess } from '@/actions/apiMessages';

const achievementMiddelware = (store) => (next) => (action) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  switch (action.type) {
    case SEND_ACHIEVEMENT: {
      const { formValues } = action;
      console.log(formValues);
      store.dispatch(loadApiRequest());
      axios
        .post(`${apiUrl}/me/achievement`, formValues, {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          console.log(res);
          store.dispatch(loadRequestSuccess(res.statusText, res.status, "Votre accomplissement a bien été envoyé, nous l'avons soumis à un Admin 😀"));
        })
        .catch((err) => store.dispatch(loadTRequestError(err.response.data, err.response.status)))
        .finally(() => {
          store.dispatch(askRefresh());
        });
    }
      break;
    default:
  }

  next(action);
};

export default achievementMiddelware;
