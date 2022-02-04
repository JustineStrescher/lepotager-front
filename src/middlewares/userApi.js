import axios from 'axios';

import { SEND_CART } from '../actions/cart';

import {

  LOG_IN,
  saveUserData,
  FETCH_USER_DATA,
  fetchUserData,
} from '../actions/user';

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      axios.post(
        'http://api.lepotagerdesculsfouettes.fr/api/login_check',
        {
          username: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          console.log(response);

          const newAction = saveUserData(
            response.data.isLogged,
            response.data.username,
            response.data.token,
          );
          store.dispatch(fetchUserData());
          store.dispatch(newAction);
          console.log(store.getState().user.token);
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case FETCH_USER_DATA:
      axios.get(

        'http://api.lepotagerdesculsfouettes.fr/api/client/info',

        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveUserData(
            response.data,
            console.log(response.data),
          ));
        })

        .catch((error) => {
          console.warn(error);
        });

      break;

    case SEND_CART:
      axios.post(

        'http://api.lepotagerdesculsfouettes.fr/api/client/basket',
        {
          id: 1,
          quantity: 2,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
          console.log(store.getState().user.token);
        });

      break;

    default:
  }

  next(action);
};

export default middleware;
