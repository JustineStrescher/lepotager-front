import axios from 'axios';

import {
  LOG_IN,
  saveUserData,
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
            response.data.logged,
            response.data.pseudo,
            response.data.token,
          );
          store.dispatch(newAction);
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
