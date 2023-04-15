// exemple to combine cardreducer
import { combineReducers } from 'redux';

// import reducer
import userReducer from './user';

// combine and name reducer
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
