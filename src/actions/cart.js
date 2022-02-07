export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = () => ({
  type: ADD_PRODUCT,
});

export const SET_DELETED_PRODUCT = 'SET_DELETED_PRODUCT';

export const setDeletedProduct = (product) => ({
  type: SET_DELETED_PRODUCT,
  product: product,
});

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const removeProduct = () => ({
  type: REMOVE_PRODUCT,
});

export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

export const changeQuantity = (productId, value) => ({
  type: CHANGE_QUANTITY,
  productId: productId,
  quantity: value,

});

export const FETCH_CURRENT_PRODUCT = 'FETCH_CURRENT_PRODUCT';

export const fetchCurrentProduct = (product) => ({
  type: FETCH_CURRENT_PRODUCT,
  product: product,
});

export const SEND_CART = 'SEND_CART';

export const sendCart = () => ({
  type: SEND_CART,
});

export const SET_EMPTY_BASKET = 'SET_EMPTY_BASKET';

export const setEmptyBasket = (newValue) => ({
  type: SET_EMPTY_BASKET,
  newValue: newValue,
});

export const SET_ALREADY_IN = 'SET_ALREADY_IN';

export const setAlreadyIn = (newValue) => ({
  type: SET_ALREADY_IN,
  newValue: newValue,
});
