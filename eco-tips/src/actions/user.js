export const UPDATE_AUTH_FIELD = 'UPDATE_AUTH_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const STAY_CONNECTED_SESSION = 'STAY_CONNECTED_SESSION';
export const RESET_ALL_DATA = 'RESET_ALL_DATA';
export const FETCH_PROFILE_DATA = 'FETCH_PROFILE_DATA';
export const SAVE_PROFILE_DATA = 'SAVE_PROFILE_DATA';

export const updateAuthField = (newValue, identifier) => ({
  type: UPDATE_AUTH_FIELD,
  newValue,
  identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitSignup = () => ({
  type: SUBMIT_SIGNUP,
});

export const saveAuthData = (firstname, token, roleId) => ({
  type: SAVE_AUTH_DATA,
  firstname,
  token,
  roleId,
});

export const resetAllData = () => ({
  type: RESET_ALL_DATA,
});

export const setAuthToken = (token) => ({
  type: STAY_CONNECTED_SESSION,
  token,
});

export const fetchProfileData = () => ({
  type: FETCH_PROFILE_DATA,
});

export const saveProfileData = (profileDatas) => ({
  type: SAVE_PROFILE_DATA,
  profileDatas,
});
