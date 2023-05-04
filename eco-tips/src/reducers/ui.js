/* eslint-disable default-param-last */
// reducers/ui.js
import { REDIRECT, REFRESH, ASK_REFRESH_PROFILE_DATA, ASK_REFRESH_FINISHED } from '@/actions/ui';

const initialState = {
  redirectTo: '',
  refresh: false,
  refreshProfileData: false,
  requestFinished: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirectTo: action.payload };
    case REFRESH:
      return { ...state, refresh: !state.refresh };
    case ASK_REFRESH_PROFILE_DATA:
      return { ...state, refreshProfileData: !state.refreshProfileData };
    case ASK_REFRESH_FINISHED:
      return { ...state, requestFinished: !state.requestFinished };
    default:
      return state;
  }
};

export default reducer;
