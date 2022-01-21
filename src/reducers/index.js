import { combineReducers } from 'redux';

import categoryReducer from './CategoryReducer';
import famillyReducer from './FamillyReducer';
import ProductReducer from './ProductReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  familly: famillyReducer,
  product: ProductReducer,
});

export default rootReducer;
