import axios from 'axios';

import { SEND_CART } from '../actions/cart';

import {

  LOG_IN,
  saveUserData,
  FETCH_USER_DATA,
  fetchUserData,
} from '../actions/user';

const middleware = (store) => (next) => (action) => {
  const basket = store.getState().cart.cartList;
  const basketToJSON = basket.map((item) => (
    {
      id: item.product.id,
      quantity: item.quantity,
    }
  ));
  const basketToApi = JSON.stringify(basketToJSON);

  switch (action.type) {
    case LOG_IN:
      axios.post(
        'https://api.lepotagerdesculsfouettes.fr/api/login_check',
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

        'https://api.lepotagerdesculsfouettes.fr/api/client/info',

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

        'https://api.lepotagerdesculsfouettes.fr/api/client/basket',
        {
          data: basketToApi,
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
          console.log(basketToApi);
        });

      break;

    default:
  }

  next(action);
};

export default middleware;
