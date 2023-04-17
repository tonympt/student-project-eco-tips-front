/* eslint-disable default-param-last */
// reducers/ui.js
import { REDIRECT, CLEAR_REDIRECT } from '@/actions/ui';

const initialState = {
  redirectTo: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirectTo: action.payload };
    case CLEAR_REDIRECT:
      return { ...state, redirectTo: '' };
    default:
      return state;
  }
};

export default reducer;
