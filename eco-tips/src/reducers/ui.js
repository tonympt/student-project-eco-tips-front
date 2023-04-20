/* eslint-disable default-param-last */
// reducers/ui.js
import { REDIRECT } from '@/actions/ui';

const initialState = {
  redirectTo: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirectTo: action.payload };
    default:
      return state;
  }
};

export default reducer;
