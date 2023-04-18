import {
  UPDATE_LOGIN_FIELD,
  UPDATE_SIGNUP_FIELD,
  SAVE_AUTH_DATA,
  STAY_CONNECTED_SESSION,
  RESET_ALL_DATA,
  SAVE_PROFILE_DATA,
} from '@/actions/user';

export const initialState = {
  email: '',
  password: '',
  confirmpassword: '',
  firstname: '',
  lastname: '',
  birthdate: '',
  token: '',
  logged: false,
  ecocoins: 0,
  score: 0,
};

const resetAllData = () => initialState;

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      // the identifier must be equal to the key of its state
      return { ...state, [action.identifier]: action.newValue };
    case UPDATE_SIGNUP_FIELD:
      return { ...state, [action.identifier]: action.newValue };
    case SAVE_AUTH_DATA: {
      const { firstname, token } = action;
      return { ...state, firstname, token, logged: true, email: '', password: '' };
    }
    case STAY_CONNECTED_SESSION:
      return { ...state, token: action.token, logged: true };
    case RESET_ALL_DATA:
      return resetAllData();
    case SAVE_PROFILE_DATA: {
      const { firstname, lastname, birthdate, email, ecocoins, score } = action.profileDatas;
      return { ...state, firstname, lastname, email, birthdate, ecocoins, score };
    }
    default:
      return state;
  }
};

export default reducer;
