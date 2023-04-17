import { UPDATE_LOGIN_FIELD, UPDATE_SIGNUP_FIELD } from '@/actions/user';

export const initialState = {
  email: '',
  password: '',
  confirmpassword: '',
  firstname: '',
  lastname: '',
  birthdate: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      // the identifier must be equal to the key of its state
      return { ...state, [action.identifier]: action.newValue };
    case UPDATE_SIGNUP_FIELD:

      return { ...state, [action.identifier]: action.newValue };
    default:
      return state;
  }
};

export default reducer;
