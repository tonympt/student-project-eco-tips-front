// exemple to combine cardreducer
import { combineReducers } from 'redux';

// import reducer
import userReducer from './user';
import uiReducer from './ui';
import collectionReducer from './collection';
import errorReducer from './error';
import successReducer from './success';
import adminReducer from './admin';

// combine and name reducer
const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  collection: collectionReducer,
  error: errorReducer,
  success: successReducer,
  admin: adminReducer,
});

export default rootReducer;
