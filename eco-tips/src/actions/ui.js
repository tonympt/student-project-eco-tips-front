export const REDIRECT = 'REDIRECT';
export const REFRESH = 'REFRESH';

export const redirect = (link) => ({ type: REDIRECT, payload: link });
export const askRefresh = () => ({ type: REFRESH });
