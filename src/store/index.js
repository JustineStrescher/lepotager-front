import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import reducer from 'src/reducers';
import productApiMiddleware from 'src/middlewares/productApi';
import categoryApiMiddleware from 'src/middlewares/categoryApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(productApiMiddleware, categoryApiMiddleware),
);

const store = createStore(reducer, enhancers);
persistStore(store);

export default store;
