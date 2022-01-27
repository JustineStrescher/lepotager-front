import axios from 'axios';
import { FETCH_PRODUCTS, saveProducts } from '../actions/product';

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      // on appelle l'api pour récupérer les produits
      axios.get('http://lepotagerdesculsfouettes.fr/api/product')
        .then((response) => {
          // une fois récupérées
          const products = response.data;
          console.log(response.data);
          // on dispatch une action véhiculant ces recettes pour les emmener au reducer
          // et les mettre dans le state
          store.dispatch(saveProducts(products));
        })
        .catch((error) => {
          console.error(error);
        });

      break;

    default:
  }

  // on passe l'action au suivant
  next(action);
};

export default middleware;
