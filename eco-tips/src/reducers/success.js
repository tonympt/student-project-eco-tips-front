import { HIDE_SUCCESS, HIDE_STATUS_SUCCESS } from '@/actions/successTypes';
import { GET_REQUEST_SUCCESS } from '@/actions/apiMessages';

const initialState = {
  successTextApi: '',
  isOpen: false,
  successStatus: '',
  successTextToDisplay: '',
};

const reducer = (state = initialState, action = {}) => {
  const { successTextApi, successStatus, successTextToDisplay } = action;
  switch (action.type) {
    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        successTextApi,
        isOpen: true,
        successStatus,
        successTextToDisplay,
      };
    case HIDE_SUCCESS:
      return {
        ...state,
        successTextApi: '',
        isOpen: false,
        successTextToDisplay: '',
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
