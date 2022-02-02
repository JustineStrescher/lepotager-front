// import CategoryData from 'src/CategoryData';
// import subCategory from 'src/FamillyData';

import {
  SAVE_CATEGORIES,
  SAVE_SUB_CATEGORIES,
  SET_SUB_CATEGORIES,
  SET_CATEGORIES,
} from '../actions/categories';

export const initialState = {
  category: [],
  subCategory: [],
  subCategoryId: 0,
  subCategoryName: '',
  categoryName: '',
};

const categoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        category: action.category,
      };
    case SAVE_SUB_CATEGORIES:
      return {
        ...state,
        subCategory: action.subCategory,
      };
    case SET_SUB_CATEGORIES:
      return {
        ...state,
        subCategoryId: action.subCategoryId,
        subCategoryName: action.subCategoryName,

      };
    case SET_CATEGORIES:
      return {
        ...state,
        categoryName: action.categoryName,

      };
    default:
      return state;
  }
};

export default categoryReducer;
