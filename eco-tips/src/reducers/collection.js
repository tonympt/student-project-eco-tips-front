import { SAVE_ALL_COLLECTION, SAVE_ALL_TAGS, SAVE_RANDOM_CARD } from '@/actions/collection';

export const initialState = {
  collection: [],
  tags: [],
  randomCard: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_COLLECTION:
      return { ...state, collection: action.collection };
    case SAVE_ALL_TAGS:
      return { ...state, tags: action.tags };
    case SAVE_RANDOM_CARD:
      return { ...state, randomCard: action.card };

    default:
      return state;
  }
};

export default reducer;
