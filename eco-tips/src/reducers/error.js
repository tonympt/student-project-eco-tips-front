// import { useNavigate } from 'react-router-dom';
import { HIDE_ERROR, HIDE_STATUS } from '@/actions/errorTypes';

const initialState = {
  error: '',
  isOpen: false,
  errorStatus: '',
};

const reducer = (state = initialState, action = {}) => {
  const { error, errorStatus } = action;
  if (error) {
    return {
      ...state,
      error,
      isOpen: true,
      errorStatus,
    };
  } if (action.type === HIDE_ERROR) {
    return {
      ...state,
      error: null,
      isOpen: false,
    };
  } if (action.type === HIDE_STATUS) {
    return {
      ...state,
      errorStatus: '',
    };
  }

  return state;
};

export default reducer;
