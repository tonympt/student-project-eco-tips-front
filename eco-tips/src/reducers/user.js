import { UPDATE_LOGIN_FIELD } from '@/actions/user';

export const initialState = {
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      // the identifier must be equal to the key of its state
      return { ...state, [action.identifier]: action.newValue };
    default:
      return state;
  }
};

export default reducer;
