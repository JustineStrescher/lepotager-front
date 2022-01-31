import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  product: ProductReducer,
  cart: CartReducer,
  user: UserReducer,
});

export default rootReducer;
