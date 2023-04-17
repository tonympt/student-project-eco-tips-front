import axios from 'axios';
import { GET_ALL_COLLECTION, saveCollection } from '@/actions/collection';

const collectionMiddelware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_COLLECTION:
      axios
        .get('http://pauline-cauty.vpnuser.lan:3000/me/collection', {
          headers: { Authorization: `Bearer ${store.getState().user.token}` },
        })
        .then((res) => {
          store.dispatch(saveCollection(res.data));
        })
        .catch((err) => console.log(err))
        .finally();
      break;
    default:
  }

  next(action);
};

export default collectionMiddelware;
