import {
  CHANGE_INPUT_VALUE,
} from 'src/actions/productDetail';

import ProductData from 'src/ProductDetailData';
import HighlightData from '../HighlightData';

export const initialState = {
  ProductData,
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

    default:
      return state;
  }
};

export default ProductReducer;
