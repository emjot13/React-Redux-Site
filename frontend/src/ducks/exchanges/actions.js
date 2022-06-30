import types from './types';

export const exchangesGetAction = (exchanges) => ({
    type: types.EXCHANGES_GET,
    payload: exchanges
});

export const exchangeAddAction = (newExchange) => ({
    type: types.EXCHANGE_ADD,
    payload: newExchange
});

export const exchangeEditAction = (exchange) => ({
    type: types.EXCHANGE_EDIT,
    payload: exchange
});


export const exchangeDeleteAction = (exchange) => ({
    type: types.EXCHANGE_DELETE,
    payload: exchange
});

export const exchangesSortAction = (exchanges) => ({
    type: types.EXCHANGES_SORT,
    payload: exchanges
});
