import axios from "axios";
import * as actions from './actions';
import {v4 as uuidv4 } from 'uuid';

export const getCoinsList = () => {
    return async dispatch => {
        try{
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=fals');
            if(response.status === 200) 
            response.data.map(coin => {
                if (coin.total_supply === null)
                coin.total_supply = 0
            })
                dispatch(actions.coinsGetAction(response.data));
        }catch(error) {
            console.log(error)
        }
    }
}

export const deleteCoin = (coin) => {
    return async dispatch => {
        try{
            dispatch(actions.coinDeleteAction(coin));
        }catch(error) {
            console.log(error)
        }
    }
}

export const editCoin = (coin) => {
    return async dispatch => {
        try{
            dispatch(actions.coinEditAction(coin));
        }catch(error) {
            console.log(error)
        }
    }
}

export const addCoin = (newCoin) => {
    newCoin["id"] = uuidv4()
    return async dispatch => {
        try{
            dispatch(actions.coinAddAction(newCoin));
        }catch(error) {
            console.log(error)
        }
    }
}

export const sortCoins = (coins) => {
    return async dispatch => {
        try{
            dispatch(actions.coinsSortAction(coins));
        }catch(error) {
            console.log(error)
        }
    }
}

