// exemple to combine cardreducer
import { combineReducers } from 'redux';

// import reducer
import cardReducer from './card';

// combine and name reducer
const rootReducer = combineReducers({
  card: cardReducer,
});

export default rootReducer;
