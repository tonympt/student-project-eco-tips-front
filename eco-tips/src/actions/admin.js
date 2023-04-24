export const GET_ALL_PROPOSALS = 'GET_REQUEST_ERROR';
export const SAVE_ALL_PROPOSALS = 'SAVE_ALL_PROPOSALS ';
export const ADD_PROPOSAL_TO_COLLECTION = 'ADD_PROPOSAL_TO_COLLECTION';
export const DELETE_PROPOSAL = 'DELETE_PROPOSAL';

export const getAllProposals = () => ({
  type: GET_ALL_PROPOSALS,
});

export const saveAllProposals = (proposals) => ({
  type: SAVE_ALL_PROPOSALS,
  proposals,
});

export const addProposalToCollection = (cardId) => ({
  type: ADD_PROPOSAL_TO_COLLECTION,
  cardId,
});

export const deleteProposal = (cardId) => ({
  type: DELETE_PROPOSAL,
  cardId,
});
