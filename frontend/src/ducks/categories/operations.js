import axios from "axios";
import * as actions from './actions';
import {v4 as uuidv4 } from 'uuid';

export const getCategoriesList = () => {
    return async dispatch => {
        try{
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/categories');
            if(response.status === 200){
                const data = response.data.reduce((acc, curr, index) =>{
                    if(index < 10){
                        acc.push({"id": curr.id, "name": curr.name, "content": curr.content, coins: []})
                    }
                    return acc
                }, [])
                dispatch(actions.categoriesGetAction(data));
            }
                
        }catch(error) {
            console.log(error)
        }
    }
}

export const deleteCategory = (category) => {
    return async dispatch => {
        try{
            dispatch(actions.categoryDeleteAction(category));
        }catch(error) {
            console.log(error)
        }
    }
}

export const editCategory = (category) => {
    return async dispatch => {
        try{
            dispatch(actions.categoryEditAction(category));
        }catch(error) {
            console.log(error)
        }
    }
}

export const addCategory = (newCategory) => {
    newCategory["id"] = uuidv4()
    return async dispatch => {
        try{
            dispatch(actions.categoryAddAction(newCategory));
        }catch(error) {
            console.log(error)
        }
    }
}

export const sortCategories = (categories) => {
    return async dispatch => {
        try{
            dispatch(actions.categoriesSortAction(categories));
        }catch(error) {
            console.log(error)
        }
    }
}

