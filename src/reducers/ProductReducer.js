import {
  CHANGE_INPUT_VALUE,
} from 'src/actions/productDetail';
import Devs from 'src/DevsData';
import {
  SAVE_HIGHLIGHT,
  SAVE_PRODUCTS,
  SAVE_ALL_PRODUCTS,
  SAVE_PRODUCT,
  SET_CONCEPT,
  SET_WHO,
} from '../actions/product';

export const initialState = {
  ProductData: [],
  allProduct: [],
  product: [],
  highlight: [],
  Devs: Devs,
  quantity: 0,
  who: true,
};

const ProductReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        quantity: action.newValue,
      };

    case SAVE_PRODUCTS:
      return {
        ...state,
        ProductData: action.products,
      };
    case SAVE_PRODUCT:
      return {
        ...state,
        product: action.product,
      };
    case SAVE_ALL_PRODUCTS:
      return {
        ...state,
        allProduct: action.AllProducts,
      };
    case SAVE_HIGHLIGHT:
      return {
        ...state,
        highlight: action.highlight,
      };
    case SET_CONCEPT:
      return {
        ...state,
        who: action.who,
      };
    case SET_WHO:
      return {
        ...state,
        who: action.who,
      };
    default:
      return state;
  }
};

export default ProductReducer;
