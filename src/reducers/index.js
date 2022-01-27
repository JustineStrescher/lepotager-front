import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import ProductReducer from './ProductReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  product: ProductReducer,
});

export default rootReducer;
