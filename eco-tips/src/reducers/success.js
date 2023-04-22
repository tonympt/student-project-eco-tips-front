import { HIDE_SUCCESS, HIDE_STATUS_SUCCESS } from '@/actions/successTypes';
import { GET_REQUEST_SUCCESS } from '@/actions/apiMessages';

const initialState = {
  successText: '',
  isOpen: false,
  successStatus: '',
};

const reducer = (state = initialState, action = {}) => {
  const { successText, successStatus } = action;
  switch (action.type) {
    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        successText,
        isOpen: true,
        successStatus,
      };
    case HIDE_SUCCESS:
      return {
        ...state,
        successText: null,
        isOpen: false,
      };
    case HIDE_STATUS_SUCCESS:
      return {
        ...state,
        successStatus: '',
      };
    default:
      return state;
  }
};

export default reducer;
