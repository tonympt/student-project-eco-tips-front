export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';

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
