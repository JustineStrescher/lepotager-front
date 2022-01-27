import {
  CHANGE_INPUT_VALUE,
} from 'src/actions/productDetail';

import { FETCH_PRODUCTS } from '../actions/product';
import HighlightData from '../HighlightData';

export const initialState = {
  ProductData: [],
  HighlightData,
  quantity: 0,
};

const ProductReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        quantity: action.newValue,
      };

    case FETCH_PRODUCTS:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default ProductReducer;
