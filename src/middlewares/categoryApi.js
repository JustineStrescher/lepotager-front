import axios from 'axios';
import {
  FETCH_CATEGORIES,
  saveCategories,
  FETCH_SUB_CATEGORIES,
  saveSubCategories,
} from '../actions/categories';

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      // on appelle l'api pour récupérer les produits
      axios.get('http://lepotagerdesculsfouettes.fr/api/category')
        .then((response) => {
          // une fois récupérées
          const category = response.data;
          store.dispatch(saveCategories(category));
        })
        .catch((error) => {
          console.error(error);
        });

      break;

    case FETCH_SUB_CATEGORIES:
      // on appelle l'api pour récupérer les subcategories
      axios.get('http://lepotagerdesculsfouettes.fr/api/category/1')
        .then((response) => {
          // une fois récupérées
          const subCategories = response.data;
          store.dispatch(saveSubCategories(subCategories.categories));
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
