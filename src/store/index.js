import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import vegeApiMiddleware from 'src/middlewares/vegetableApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(vegeApiMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
