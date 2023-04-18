export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const LOGOUT = 'LOGOUT';
export const STAY_CONNECTED_SESSION = 'STAY_CONNECTED_SESSION';
export const RESET_ALL_DATA = 'RESET_ALL_DATA';
export const FETCH_PROFILE_DATA = 'FETCH_PROFILE_DATA';
export const SAVE_PROFILE_DATA = 'SAVE_PROFILE_DATA';

export const updateLoginField = (newValue, identifier) => ({
  type: UPDATE_LOGIN_FIELD,
  newValue,
  identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitSignup = () => ({
  type: SUBMIT_SIGNUP,
});

export const updateSignupField = (newValue, identifier) => ({
  type: UPDATE_SIGNUP_FIELD,
  newValue,
  identifier,
});
export const saveAuthData = (firstname, token) => ({
  type: SAVE_AUTH_DATA,
  firstname,
  token,
});

export const logOut = () => ({
  type: LOGOUT,
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
