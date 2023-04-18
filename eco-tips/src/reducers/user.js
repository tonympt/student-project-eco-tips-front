import { UPDATE_LOGIN_FIELD, UPDATE_SIGNUP_FIELD, SAVE_AUTH_DATA, LOGOUT, STAY_CONNECTED_SESSION } from '@/actions/user';

export const initialState = {
  email: '',
  password: '',
  confirmpassword: '',
  firstname: '',
  lastname: '',
  birthdate: '',
  token: '',
  logged: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      // the identifier must be equal to the key of its state
      return { ...state, [action.identifier]: action.newValue };
    case UPDATE_SIGNUP_FIELD:
      return { ...state, [action.identifier]: action.newValue };
    case SAVE_AUTH_DATA: {
      const { firstname, token } = action;
      return { ...state, firstname, token, logged: true, email: '', password: '' }; }
    case LOGOUT:
      return { ...state, firstname: '', token: '', logged: false };
    case STAY_CONNECTED_SESSION:
      return { ...state, token: action.token, logged: true };
    default:
      return state;
  }
};

export default reducer;
