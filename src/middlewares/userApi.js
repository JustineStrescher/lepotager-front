import axios from 'axios';

import { SEND_CART } from '../actions/cart';

import {

  LOG_IN,
  saveUserData,
  FETCH_USER_DATA,
  fetchUserData,
  SIGN_UP,
  signUp,
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
  //const userDataToApi = JSON.stringify(userDataToJSON);

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
    case SIGN_UP:
      axios.post(
        'https://api.lepotagerdesculsfouettes.fr/api/client/register',
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
          firstname: store.getState().user.firstname,
          lastname: store.getState().user.lastname,
          address: store.getState().user.adress,
          country: store.getState().user.country,
          phone: store.getState().user.phone,
          city: store.getState().user.city,
          zip: store.getState().user.zip,
        },
      )
        .then((response) => {
          console.log(JSON.stringify(response));

          store.dispatch(signUp());
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
