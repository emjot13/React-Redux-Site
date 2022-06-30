import axios from "axios";
import * as actions from './actions';
import {v4 as uuidv4 } from 'uuid';


export const getExchangesList = () => {
    return async dispatch => {
        try{
            const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
            if(response.status === 200) {
                const data = response.data.reduce((acc, curr, index) =>{
                    if(index < 20){
                        curr["coins"]=[]
                        acc.push(curr)
                    }
                    return acc
                }, [])
                dispatch(actions.exchangesGetAction(data));
            }
        }catch(error) {
            console.log(error)
        }
    }
}

export const deleteExchange = (exchange) => {
    return async dispatch => {
        try{
            dispatch(actions.exchangeDeleteAction(exchange));
        }catch(error) {
            console.log(error)
        }
    }
}

export const editExchange = (exchange) => {
    return async dispatch => {
        try{
            dispatch(actions.exchangeEditAction(exchange));
        }catch(error) {
            console.log(error)
        }
    }
}

export const addExchange = (newExchange) => {
    newExchange["id"] = uuidv4()
    return async dispatch => {
        try{
            dispatch(actions.exchangeAddAction(newExchange));
        }catch(error) {
            console.log(error)
        }
    }
}

export const sortExchanges = (exchanges) => {
    return async dispatch => {
        try{
            dispatch(actions.exchangesSortAction(exchanges));
        }catch(error) {
            console.log(error)
        }
    }
}

