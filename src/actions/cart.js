export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addToCart = (productId) => ({
  type: ADD_PRODUCT,
  productId: productId,
});

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const removeFromCart = (productId) => ({
  type: REMOVE_PRODUCT,
  itemId: productId,
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
