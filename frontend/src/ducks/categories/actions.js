import types from './types';

export const categoriesGetAction = (categories) => ({
    type: types.CATEGORIES_GET,
    payload: categories
});

export const categoryAddAction = (newCategory) => ({
    type: types.CATEGORY_ADD,
    payload: newCategory
});

export const categoryEditAction = (category) => ({
    type: types.CATEGORY_EDIT,
    payload: category
});


export const categoryDeleteAction = (category) => ({
    type: types.CATEGORY_DELETE,
    payload: category
});

export const categoriesSortAction = (categories) => ({
    type: types.CATEGORIES_SORT,
    payload: categories
});
