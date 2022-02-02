import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';// defaults to localStorage for web
// import reducer from 'src/reducers';
import rootReducer from 'src/reducers';

import productApiMiddleware from 'src/middlewares/productApi';
import categoryApiMiddleware from 'src/middlewares/categoryApi';
import userApiMiddleware from 'src/middlewares/userApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(productApiMiddleware, categoryApiMiddleware, userApiMiddleware),
);

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, enhancers);

export const persistor = persistStore(store);

export default store;
