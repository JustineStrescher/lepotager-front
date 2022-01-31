import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  product: ProductReducer,
  cart: CartReducer,
  user: userReducer,

});

export default rootReducer;
