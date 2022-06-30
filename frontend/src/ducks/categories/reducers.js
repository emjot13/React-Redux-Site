import types from "./types";

export const categoriesReducer = (state = [], action) => {
    const payload = action.payload;
    switch(action.type) {
        case types.CATEGORIES_GET: 
            return [...payload]
        
        case types.CATEGORY_DELETE:
            return state.filter(category => category.id !== payload.id)

        case types.CATEGORY_ADD:
            return [...state, payload]; 
            
        case types.CATEGORY_EDIT:
            return [...state.filter(category => category.id !== payload.id), payload] 

        case types.CATEGORIES_SORT:
            return [...payload]

        default:
            return state;
    }
}
