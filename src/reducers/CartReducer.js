import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_QUANTITY,
  FETCH_CURRENT_PRODUCT,
} from '../actions/cart';

export const initialState = {
  cart: [],
  currentProduct: null,
};
const CartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT:
      //Vérification de l'existence ou non du produit dans le panier
     
      const inCart = state.cart.find((product) => product.id === action.product.id)
      return {
        ...state,
        ...state.cart,
        product: product,
        quantity: 1,
      };
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
