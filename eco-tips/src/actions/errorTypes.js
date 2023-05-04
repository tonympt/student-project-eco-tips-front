export const SET_ERROR = 'SET_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';
export const HIDE_STATUS = 'HIDE_STATUS';

export function setError(error) {
  return {
    type: SET_ERROR,
    error,
  };
}

export function hideError() {
  return {
    type: HIDE_ERROR,
  };
}

export function hideStatus() {
  return {
    type: HIDE_STATUS,
  };
}
