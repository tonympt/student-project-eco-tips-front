import { SAVE_ALL_COLLECTION, SAVE_ALL_TAGS } from '@/actions/collection';

export const initialState = {
  collection: [],
  tags: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_COLLECTION:
      return { ...state, collection: action.collection };
    case SAVE_ALL_TAGS:
      return { ...state, tags: action.tags };
    default:
      return state;
  }
};

export default reducer;
