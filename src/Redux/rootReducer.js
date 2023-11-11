import { combineReducers } from 'redux';
import counterReducer from './navigateSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here if needed
});

export default rootReducer;