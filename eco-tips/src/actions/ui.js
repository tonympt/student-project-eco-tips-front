export const REDIRECT = 'REDIRECT';
export const CLEAR_REDIRECT = 'CLEAR_REDIRECT';

export const redirect = (link) => ({ type: REDIRECT, payload: link });

export const clearRedirectTo = () => ({ type: CLEAR_REDIRECT });
