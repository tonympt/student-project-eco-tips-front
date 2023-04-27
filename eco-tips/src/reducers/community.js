import { SAVE_LATEST_CARD } from '@/actions/community';

export const initialState = {
  latestCard: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LATEST_CARD:
      return { ...state, latestCard: action.latestCard };
    default:
      return state;
  }
};

export default reducer;
