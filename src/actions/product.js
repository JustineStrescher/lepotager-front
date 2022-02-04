export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

export const saveProducts = (products, productId = 0) => ({
  type: SAVE_PRODUCTS,
  products: products,
  productId: productId,
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

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  newValue: inputValue,
});

export const SET_ADD = 'SET_ADD';

export const setAdd = (newValue) => ({
  type: SET_ADD,
  newValue: newValue,
});

export const SET_NOT_ADD = 'SET_NOT_ADD';

export const setNotAdd = (newValue) => ({
  type: SET_NOT_ADD,
  newValue: newValue,
});
