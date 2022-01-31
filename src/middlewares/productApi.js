import axios from 'axios';
import {
  FETCH_ALL_PRODUCTS,
  saveAllProducts,
  saveProducts,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_HIGHLIGHT,
  saveHighlight,
} from '../actions/product';

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      // on appelle l'api pour récupérer les produits
      axios.get('http://lepotagerdesculsfouettes.fr/api/product')
        .then((response) => {
          const products = response.data;
          store.dispatch(saveAllProducts(products));
        })
        .catch((error) => {
          console.error(error);
        });

      break;
    // Récupère tous les produits mis en avant par le client
    case FETCH_HIGHLIGHT:
      axios.get('http://lepotagerdesculsfouettes.fr/api/highlighted')
        .then((response) => {
          const highligth = response.data;
          store.dispatch(saveHighlight(highligth));
        })
        .catch((error) => {
          console.error(error);
        });

      break;
    // on appelle l'api pour récupérer les produits par categorie
    case FETCH_PRODUCTS_BY_CATEGORY:
      axios.get('http://lepotagerdesculsfouettes.fr/api/product')
        .then((response) => {
          const products = response.data;
          // eslint-disable-next-line arrow-body-style
          const productByCategory = products.filter((testedVege) => {
            return testedVege.category.id === store.getState().category.subCategoryId;
          });

          store.dispatch(saveProducts(productByCategory));
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
