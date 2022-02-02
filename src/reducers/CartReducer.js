import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_QUANTITY,
  FETCH_CURRENT_PRODUCT,
} from '../actions/cart';

import { SAVE_PRODUCT } from '../actions/product';

export const initialState = {
  cartList: [],
  product: [],
  quantity: 0,
};
// //Vérification de l'existence ou non du produit dans le panier
// const inCart = state.cart.find((product) => product.id === action.product.id)

const CartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCT:
      return {
        ...state,
        product: action.product,
      };
    case ADD_PRODUCT: {
      return {
        cartList: { ...state.cartList },
        quantity: 0,
        product: [],
      };
    }
    case REMOVE_PRODUCT:
      return {};
    case CHANGE_QUANTITY:
      return {};
    case FETCH_CURRENT_PRODUCT:
      return {};
    default:
      return state;
  }
};

export default CartReducer;
