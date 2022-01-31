export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products: products,
});

export const SAVE_PRODUCT = 'SAVE_PRODUCT';

export const saveProduct = (product) => ({
  type: SAVE_PRODUCT,
  product: product,
});

export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';

export const fetchAllProducts = () => ({
  type: FETCH_ALL_PRODUCTS,
});

export const SAVE_ALL_PRODUCTS = 'SAVE_ALL_PRODUCTS';

export const saveAllProducts = (Allproducts) => ({
  type: SAVE_ALL_PRODUCTS,
  AllProducts: Allproducts,
});
export const FETCH_PRODUCTS_BY_CATEGORY = 'FETCH_PRODUCTS_BY_CATEGORY';

export const fetchProductsByCategory = () => ({
  type: FETCH_PRODUCTS_BY_CATEGORY,
});

export const FETCH_HIGHLIGHT = 'FETCH_HIGHLIGHT';

export const fetchHighlight = () => ({
  type: FETCH_HIGHLIGHT,
});

export const SAVE_HIGHLIGHT = 'SAVE_HIGHLIGHT';

export const saveHighlight = (highlight) => ({
  type: SAVE_HIGHLIGHT,
  highlight: highlight,
});

// set Qui sommes nous sur true pour l'affichage
export const SET_WHO = 'SET_WHO';

export const setWho = () => ({
  type: SET_WHO,
  who: true,
});
// set Qui sommes nous sur false pour l'affichage
export const SET_CONCEPT = 'SET_CONCEPT';

export const setConcept = () => ({
  type: SET_CONCEPT,
  who: false,
});