// import CategoryData from 'src/CategoryData';
// import subCategory from 'src/FamillyData';

import { SAVE_CATEGORIES, FETCH_SUB_CATEGORIES } from '../actions/categories';

export const initialState = {
  category: [],
  subCategory: [],
};

const categoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        category: action.category,
      };
    case FETCH_SUB_CATEGORIES:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default categoryReducer;
