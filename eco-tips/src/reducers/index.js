// exemple to combine cardreducer
import { combineReducers } from 'redux';

// import reducer
import userReducer from './user';
import uiReducer from './ui';

// combine and name reducer
const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
});

export default rootReducer;
