export const REDIRECT = 'REDIRECT';
export const REFRESH = 'REFRESH';
export const ASK_REFRESH_PROFILE_DATA = 'ASK_REFRESH_PROFILE_DATA';

export const redirect = (link) => ({ type: REDIRECT, payload: link });
export const askRefresh = () => ({ type: REFRESH });
export const askRefreshProfileData = () => ({ type: ASK_REFRESH_PROFILE_DATA });
