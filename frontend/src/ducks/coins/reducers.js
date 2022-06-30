import types from "./types";

export const coinsReducer = (state = [], action) => {
    const payload = action.payload;
    switch(action.type) {
        case types.COINS_GET: 
            return [...payload]
        
        case types.COIN_DELETE:
            return state.filter(coin => coin.id !== payload.id)

        case types.COIN_ADD:
            return [...state, payload]; 
            
        case types.COIN_EDIT:
            return [...state.filter(coin => coin.id !== payload.id), payload] 

        case types.COINS_SORT:
            return [...payload]

        default:
            return state;
    }
}
