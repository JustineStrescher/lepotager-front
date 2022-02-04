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
      axios.get('https://api.lepotagerdesculsfouettes.fr/api/category')
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
      axios.get('https://api.lepotagerdesculsfouettes.fr/api/subcategory')
        .then((response) => {
          // une fois récupérées
          const subCategories = response.data;
          const subCategoryByCategory = subCategories.filter((testedVege) => (
            testedVege.arborescence.Category === store.getState().category.categoryName
          ));
          store.dispatch(saveSubCategories(subCategoryByCategory));
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
