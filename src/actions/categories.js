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

export const saveSubCategories = (products) => ({
  type: SAVE_SUB_CATEGORIES,
  products: products,
});
