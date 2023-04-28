/* eslint-disable default-param-last */
// reducers/ui.js
import { REDIRECT, REFRESH, ASK_REFRESH_PROFILE_DATA } from '@/actions/ui';

const initialState = {
  redirectTo: '',
  refresh: false,
  refreshProfileData: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirectTo: action.payload };
    case REFRESH:
      return { ...state, refresh: !state.refresh };
    case ASK_REFRESH_PROFILE_DATA:
      return { ...state, refreshProfileData: !state.refreshProfileData };
    default:
      return state;
  }
};

export default reducer;
