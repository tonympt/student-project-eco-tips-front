/* eslint-disable default-param-last */
// reducers/ui.js
import { REDIRECT, REFRESH } from '@/actions/ui';

const initialState = {
  redirectTo: '',
  refresh: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirectTo: action.payload };
    case REFRESH:
      return { ...state, refresh: !state.refresh };
    default:
      return state;
  }
};

export default reducer;
