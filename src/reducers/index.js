import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  product: ProductReducer,
  cart: CartReducer,
});

export default rootReducer;
