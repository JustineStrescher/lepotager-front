import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import productApiMiddleware from 'src/middlewares/productApi';
import categoryApiMiddleware from 'src/middlewares/categoryApi';
import userApiMiddleware from 'src/middlewares/userApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(productApiMiddleware, categoryApiMiddleware, userApiMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
