export const GET_ALL_COLLECTION = 'GET_ALL_COLLECTION';
export const SAVE_ALL_COLLECTION = 'SAVE_ALL_COLLECTION';

export const getAllCollection = () => ({ type: GET_ALL_COLLECTION });

export const saveCollection = (collection) => ({
  type: SAVE_ALL_COLLECTION,
  collection,
});
