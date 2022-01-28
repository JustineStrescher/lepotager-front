export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

export const saveCategories = (category) => ({
  type: SAVE_CATEGORIES,
  category: category,
});

export const FETCH_SUB_CATEGORIES = 'FETCH_SUB_CATEGORIES';

export const fetchSubCategories = () => ({
  type: FETCH_SUB_CATEGORIES,
});

export const SAVE_SUB_CATEGORIES = 'SAVE_SUB_CATEGORIES';

export const saveSubCategories = (subCategory) => ({
  type: SAVE_SUB_CATEGORIES,
  subCategory: subCategory,
});

export const SET_SUB_CATEGORIES = 'SET_SUB_CATEGORIES';

export const setSubCategories = (subCategoryId, subCategoryName) => ({
  type: SET_SUB_CATEGORIES,
  subCategoryId: subCategoryId,
  subCategoryName: subCategoryName,
});

export const SET_CATEGORIES = 'SET_CATEGORIES';

export const setCategories = (categoryId) => ({
  type: SET_CATEGORIES,
  categoryId: categoryId,
});
