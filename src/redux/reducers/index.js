import { combineReducers } from 'redux';
import user from './user';
import screen from './screen';
import products from './products';
import cart from './cart';

const reducers = combineReducers({
  user,
  screen,
  products,
  cart,
});

export default reducers;
