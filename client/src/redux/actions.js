import {ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV, GET_CHARACTER_DETAIL } from "./actions-types";
import axios from "axios";


// 1.-Action - addFav
// ---------------------
const addFav =  (character) => {
    const endpoint = 'http://localhost:5000/countries';

    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);

            return dispatch({
                type: ADD_FAV,
                payload: data
            })
        } catch (error){
            console.log(error); 
        }

    };
}

// 2.-Action - removeFav
// -----------------------
const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

    return async (dispatch) => {
        try{
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            })
        }catch(error) {
            console.log(error); 
        }
    }
    
}

// 3.-Action - filterFavs
// -------------------------
const filterFavs = (gender) => {
    return {
        type: FILTER_FAV,
        payload: gender
    }
}

// 4.-Action - orderFavs
// -----------------------
const orderFavs = (order) => {
    return {
        type: ORDER_FAV,
        payload: order
    }
}

// 5.-Action - getCharacterDetail
// --------------------------------
const getCharacterDetail = (id) => {
    return function(dispatch){
        const URL_BASE = "https://rym2.up.railway.app/api";
        const KEY = "{pi-Seven00321}";

        fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then(( response ) => response.json())
        .then((data) => dispatch({ type: GET_CHARACTER_DETAIL, payload: data}));  
    };
}

export {addFav, removeFav, filterFavs, orderFavs, getCharacterDetail}