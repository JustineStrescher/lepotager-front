import axios from 'axios';

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
        'http://lepotagerdesculsfouettes.fr/api/login_check',
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
          store.dispatch(newAction);
          store.dispatch(fetchUserData());
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case FETCH_USER_DATA:
      axios.get(

        'http://lepotagerdesculsfouettes.fr/api/client/info',

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

    default:
  }

  next(action);
};

export default middleware;
