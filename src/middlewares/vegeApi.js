import axios from 'axios';
import { SUBMIT_LOGIN, saveNickname } from '../actions/vege';

const vegeMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware', action);

  // on réagit à une action SUBMIT_LOGIN en faisant appel à l'API
  if (action.type === SUBMIT_LOGIN) {
    axios.post(
      // URL
      'http://localhost:3001/login',
      // données
      {
        // on pioche les informations dans le state
        email: store.getState().email,
        password: store.getState().password,
      },
    )
      .then((response) => {
        // console.log(response);

        // récupérer le pseudo dans la réponse et le stocker dans le state
        // => pour modifier le state, il faut dispatch une action
        store.dispatch(saveNickname(response.data.pseudo));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // on passe l'action au suivant
  next(action);
};

export default vegeMiddleware;
