import ProductData from 'src/ProductDetailData';

export const initialState = {
  ProductData,
};

const ProductReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ProductReducer;
