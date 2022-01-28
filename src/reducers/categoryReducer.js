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
  categoryId: '0',
  categoryApi: 'http://lepotagerdesculsfouettes.fr/api/category/',
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
        categoryId: action.CategoryId,
        categoryName: action.CategoryName,

      };
    default:
      return state;
  }
};

export default categoryReducer;
