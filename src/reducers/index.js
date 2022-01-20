import { combineReducers } from 'redux';

import categoryReducer from './CategoryReducer';
import famillyReducer from './FamillyReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  familly: famillyReducer,
});

export default rootReducer;
