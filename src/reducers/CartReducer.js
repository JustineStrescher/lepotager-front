import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  RESET_CART,
  FETCH_CURRENT_PRODUCT,
  SEND_CART,
  SET_DELETED_PRODUCT,
  SET_ALREADY_IN,
} from '../actions/cart';

import {
  SAVE_PRODUCT,
  CHANGE_INPUT_VALUE,
  SET_ADD,
  SET_NOT_ADD,
  SET_ADD_TO_API,
} from '../actions/product';

export const initialState = {
  cartList: [],
  product: [],
  productId: 0,
  deleteProductId: 0,
  quantity: 0,
  add: false,
  addToApi: false,
  notAdd: false,
  alreadyIn: false,
};
// //Vérification de l'existence ou non du produit dans le panier
// const inCart = state.cart.find((product) => product.id === action.product.id)

const CartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        quantity: action.newValue,
      };
    case SAVE_PRODUCT:
      return {
        ...state,
        product: action.product,
        productId: action.productId,
      };
    case ADD_PRODUCT: {
      const newItem = {
        id: state.product.id,
        product: state.product,
        quantity: state.quantity,
      };

      return {
        ...state,
        cartList: [...state.cartList, newItem],
        quantity: 0,
        product: [],
      };
    }
    case SEND_CART:
      return {
        ...state,
        cartList: [],
      };
    case REMOVE_PRODUCT: {
      const filteredArray = (
        state.cartList.filter((item) => item.product.id !== state.deleteProductId)
      );

      return {
        ...state,
        cartList: filteredArray,

      };
    }

    case RESET_CART:
      return {
        ...state,
        cartList: [],
      };

    case FETCH_CURRENT_PRODUCT:
      return {};

    case SET_DELETED_PRODUCT:
      return {
        ...state,
        deleteProductId: action.product,
      };

    case SET_ADD:
      return {
        ...state,
        add: action.newValue,
      };

    case SET_ADD_TO_API:
      return {
        ...state,
        addToApi: action.newValue,
      };

    case SET_NOT_ADD:
      return {
        ...state,
        notAdd: action.newValue,
      };
    case SET_ALREADY_IN:
      return {
        ...state,
        alreadyIn: action.newValue,
      };
    default:
      return state;
  }
};

export default CartReducer;
