export const GET_ALL_COLLECTION = 'GET_ALL_COLLECTION';
export const SAVE_ALL_COLLECTION = 'SAVE_ALL_COLLECTION';
export const GET_ALL_TAGS = 'GET_ALL_TAGS';
export const SAVE_ALL_TAGS = 'SAVE_ALL_TAGS';
export const SEND_PROPOSAL = 'SEND_PROPOSAL';
export const GET_RANDOM_CARD = 'GET_RANDOM_CARD';
export const SAVE_RANDOM_CARD = 'SAVE_RANDOM_CARD';
export const SAVE_RANDOM_CARD_COLLECTION = 'SAVE_RANDOM_CARD_COLLECTION';
export const DELETE_ONE_CARD = 'DELETE_ONE_CARD';
export const CHECKED_CARD = 'CHECKED_CARD';

export const getAllCollection = () => ({ type: GET_ALL_COLLECTION });

export const saveCollection = (collection) => ({
  type: SAVE_ALL_COLLECTION,
  collection,
});

export const getAllTags = () => ({ type: GET_ALL_TAGS });

export const saveAllTags = (tags) => ({
  type: SAVE_ALL_TAGS,
  tags,
});

export const sendProposal = (formValues) => ({
  type: SEND_PROPOSAL,
  formValues,
});

export const getRandomCard = () => ({ type: GET_RANDOM_CARD });

export const saveRandomCard = (card) => ({
  type: SAVE_RANDOM_CARD,
  card,
});

export const saveRandomCardCollection = (formValues) => ({
  type: SAVE_RANDOM_CARD_COLLECTION,
  formValues,
});

export const deleteOneCard = (idCard) => ({
  type: DELETE_ONE_CARD,
  idCard,
});

export const checkedCard = (idCard) => ({
  type: CHECKED_CARD,
  idCard,
});
