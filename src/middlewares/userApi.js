import axios from 'axios';

import { SEND_CART, setEmptyBasket } from '../actions/cart';
import { setAdd, setNotAdd } from '../actions/product';
import {

  LOG_IN,
  saveUserData,
  FETCH_USER_DATA,
  fetchUserData,
} from '../actions/user';

const middleware = (store) => (next) => (action) => {
  const add = store.getState().cart.add;
  const notAdd = store.getState().cart.notAdd;

  const basket = store.getState().cart.cartList;
  const basketToJSON = basket.map((item) => (
    {
      id: item.product.id,
      quantity: item.quantity,
    }
  ));

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
          data: basketToJSON,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setEmptyBasket());
          store.dispatch(setAdd(!add));
          window.setTimeout(() => {
            store.dispatch(setAdd(false));
          }, 4000);
        })
        .catch((error) => {
          store.dispatch(setNotAdd(!add));
          window.setTimeout(() => {
            store.dispatch(setNotAdd(false));
          }, 4000);
          console.warn(error);
        });

      break;

    default:
  }

  next(action);
};

export default middleware;
