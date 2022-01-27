import { combineReducers } from 'redux';

import categoryReducer from './CategoryReducer';
import famillyReducer from './FamillyReducer';
import ProductReducer from './ProductReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  familly: famillyReducer,
  product: ProductReducer,
  user: userReducer,
});

export default rootReducer;
