import axios from 'axios';
import { SEND_CART, setEmptyBasket } from '../actions/cart';
import { setAdd, setAddToApi, setNotAdd } from '../actions/product';
import {

  LOG_IN,
  saveUserData,
  FETCH_USER_DATA,
  UPDATE_ACOUNT,
  fetchUserData,
  SIGN_UP,
  updateLoginField,
} from '../actions/user';

const middleware = (store) => (next) => (action) => {
  const add = store.getState().cart.add;
  const addToApi = store.getState().cart.addToApi;
  const notAdd = store.getState().cart.notAdd;

  const basket = store.getState().cart.cartList;
  const basketToJSON = basket.map((item) => (
    {
      id: item.id,
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
            response.data.token,
          );
          store.dispatch(newAction);
          store.dispatch(fetchUserData());
          // console.log(store.getState().user.token);
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
            store.getState().user.isLogged,
            store.getState().user.token,
            response.data,
          ));
        })

        .catch((error) => {
          console.warn(error);
        });

      break;

    case UPDATE_ACOUNT:
      axios.post(

        'https://api.lepotagerdesculsfouettes.fr/api/client/update',
        {
          lastname: store.getState().user.lastname,
          firstname: store.getState().user.firstname,
          email: store.getState().user.eMail,
          phone: store.getState().user.phone,
          address: store.getState().user.address,
          city: store.getState().user.city,
          zip: store.getState().user.zip,
          password: store.getState().user.passWord,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(fetchUserData());
            store.dispatch(updateLoginField('', 'passWord'));
          }
          else {
            store.dispatch(setNotAdd(!notAdd));
            window.setTimeout(() => {
              store.dispatch(setNotAdd(false));
            }, 5000);
          }
        })
        .catch((error) => {
          store.dispatch(setNotAdd(!notAdd));
          window.setTimeout(() => {
            store.dispatch(setNotAdd(false));
          }, 5000);
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
          if (response.status === 201) {
            store.dispatch(setEmptyBasket());
            store.dispatch(setAddToApi(!add));
            window.setTimeout(() => {
              store.dispatch(setAddToApi(false));
            }, 4000);
          }
          else {
            store.dispatch(setNotAdd(!notAdd));
            window.setTimeout(() => {
              store.dispatch(setNotAdd(false));
            }, 4000);
          }
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    default:
  }

  next(action);
};

export default middleware;
