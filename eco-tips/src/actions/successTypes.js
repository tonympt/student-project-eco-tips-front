export const SET_SUCCESS = 'SET_ERROR';
export const HIDE_SUCCESS = 'HIDE_SUCCES';
export const HIDE_STATUS_SUCCESS = 'HIDE_STATUS_SUCCESS';

export function setSuccess(success) {
  return {
    type: SET_SUCCESS,
    success,
  };
}

export function hideSuccess() {
  return {
    type: HIDE_SUCCESS,
  };
}

export function hideStatus() {
  return {
    type: HIDE_STATUS_SUCCESS,
  };
}
