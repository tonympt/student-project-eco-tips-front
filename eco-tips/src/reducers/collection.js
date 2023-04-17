import { SAVE_ALL_COLLECTION } from '@/actions/collection';

export const initialState = {
  collection: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_COLLECTION:
      return { ...state, collection: action.collection };
    default:
      return state;
  }
};

export default reducer;
