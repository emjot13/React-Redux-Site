import types from "./types";

export const exchangesReducer = (state = [], action) => {
    const payload = action.payload;
    switch(action.type) {
        case types.EXCHANGES_GET: 
            return [...payload]
        
        case types.EXCHANGE_DELETE:
            return state.filter(exchange => exchange.id !== payload.id)

        case types.EXCHANGE_ADD:
            return [...state, payload]; 
            
        case types.EXCHANGE_EDIT:
            return [...state.filter(exchange => exchange.id !== payload.id), payload] 

        case types.EXCHANGES_SORT:
            return [...payload]

        default:
            return state;
    }
}
