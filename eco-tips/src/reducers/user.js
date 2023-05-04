/* eslint-disable max-len */
import {
  UPDATE_AUTH_FIELD,
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
  roleId: 0,
};

const resetAllData = () => initialState;

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_AUTH_FIELD:
      // the identifier must be equal to the key of its state
      return { ...state, [action.identifier]: action.newValue };
    case SAVE_AUTH_DATA: {
      const { firstname, token, roleId, ecocoins, score } = action;
      return { ...state, firstname, token, ecocoins, score, logged: true, roleId, email: '', password: '' };
    }
    case STAY_CONNECTED_SESSION:
      return { ...state, token: action.token, logged: true };
    case RESET_ALL_DATA:
      return resetAllData();
    case SAVE_PROFILE_DATA: {
      const { firstname, lastname, birthdate, email, ecocoins, score, role_id: roleId } = action.profileDatas;
      return { ...state, firstname, lastname, email, birthdate, ecocoins, score, roleId };
    }
    default:
      return state;
  }
};

export default reducer;
