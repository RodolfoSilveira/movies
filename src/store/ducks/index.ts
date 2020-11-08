import { combineReducers } from 'redux';
import message from './message';
import page from './page';

const reducers = combineReducers({
  message,
  page,
});

export default reducers;
