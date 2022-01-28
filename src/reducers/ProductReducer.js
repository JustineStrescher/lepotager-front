import {
  CHANGE_INPUT_VALUE,
} from 'src/actions/productDetail';

import { SAVE_HIGHLIGHT, SAVE_PRODUCTS, SAVE_ALL_PRODUCTS } from '../actions/product';

export const initialState = {
  ProductData: [],
  allProduct: [],
  highlight: [],
  quantity: 0,
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
    default:
      return state;
  }
};

export default ProductReducer;
