export const REDIRECT = 'REDIRECT';

export const redirect = (link) => ({ type: REDIRECT, payload: link });
