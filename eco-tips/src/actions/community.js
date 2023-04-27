export const GET_LATEST_CARD = 'GET_LATEST_CARD';
export const SAVE_LATEST_CARD = 'SAVE_LATEST_CARD';

export const getLatestCard = () => ({ type: GET_LATEST_CARD });

export const saveLatestCard = (latestCard) => ({
  type: SAVE_LATEST_CARD,
  latestCard,
});
