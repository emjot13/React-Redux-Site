import types from './types';

export const coinsGetAction = (coins) => ({
    type: types.COINS_GET,
    payload: coins
});

export const coinAddAction = (newCoin) => ({
    type: types.COIN_ADD,
    payload: newCoin
});

export const coinEditAction = (coin) => ({
    type: types.COIN_EDIT,
    payload: coin
});


export const coinDeleteAction = (coin) => ({
    type: types.COIN_DELETE,
    payload: coin
});

export const coinsSortAction = (coins) => ({
    type: types.COINS_SORT,
    payload: coins
});
