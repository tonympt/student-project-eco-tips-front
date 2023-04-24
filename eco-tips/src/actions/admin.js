export const GET_ALL_PROPOSALS = 'GET_REQUEST_ERROR';
export const SAVE_ALL_PROPOSALS = 'SAVE_ALL_PROPOSALS ';

export const getAllProposals = () => ({
  type: GET_ALL_PROPOSALS,
});

export const saveAllProposals = (proposals) => ({
  type: SAVE_ALL_PROPOSALS,
  proposals,
});
