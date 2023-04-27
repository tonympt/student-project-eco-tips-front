import { SAVE_ALL_PROPOSALS } from '@/actions/admin';

export const initialState = {
  proposals: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_PROPOSALS:
      return { ...state, proposals: action.proposals };
    default:
      return state;
  }
};

export default reducer;
