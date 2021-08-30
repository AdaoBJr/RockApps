import { combineReducers } from 'redux';
import user from './user';
import screen from './screen';
import cart from './cart';

const reducers = combineReducers({
  user,
  screen,
  cart,
});

export default reducers;
