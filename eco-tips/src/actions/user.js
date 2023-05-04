export const UPDATE_AUTH_FIELD = 'UPDATE_AUTH_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const STAY_CONNECTED_SESSION = 'STAY_CONNECTED_SESSION';
export const RESET_ALL_DATA = 'RESET_ALL_DATA';
export const FETCH_PROFILE_DATA = 'FETCH_PROFILE_DATA';
export const SAVE_PROFILE_DATA = 'SAVE_PROFILE_DATA';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

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

export const saveAuthData = (firstname, token, roleId, ecocoins, score) => ({
  type: SAVE_AUTH_DATA,
  firstname,
  token,
  roleId,
  ecocoins,
  score,
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

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const updatePassword = (formValues) => ({
  type: UPDATE_PASSWORD,
  formValues,
});
export const updateAccount = (formValues) => ({
  type: UPDATE_ACCOUNT,
  formValues,
});
