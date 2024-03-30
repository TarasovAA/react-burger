import { TIngredient } from '../../utils/types';

import api from "../api";

const ingredients = "INGREDIENTS";

export const GET_INGREDIENTS_REQUEST = `${ingredients}/GET_REQUEST`;
export const GET_INGREDIENTS_REQUEST_SUCCESS = `${ingredients}/GET_INGREDIENTS_SUCCESS`;
export const GET_INGREDIENTS_REQUEST_FAILED = `${ingredients}/GET_REQUEST_FAILED`;

const constructor = "CONSTRUCTOR";

export const ADD_INGREDIENT_DATA = `${constructor}/ADD_INGREDIENT`;
export const DELETE_INGREDIENT_DATA = `${constructor}/DELETE_INGREDIENT`;
export const SET_CONSTRUCTOR_BUNS = `${constructor}/SET_BUNS`;
export const RESET_INGREDIENT_DATA = `${constructor}/RESET_INGREDIENT`;
export const CLEAR_CONSTRUCTOR = `${constructor}/CLEAR`;

const order = "ORDER";

export const CREATE_ORDER_REQUEST = `${order}/CREATE_REQUEST`;
export const CREATE_ORDER_REQUEST_SUCCESS = `${order}/CREATE_REQUEST_SUCCESS`;
export const CREATE_ORDER_REQUEST_FAILED = `${order}/CREATE_REQUEST_FAILED`;


export interface IBurgerConstructorState{
    head: Array<TIngredient>
    body: Array<TIngredient>
}

export const getIngredients = () => {
    /* @ts-ignore */
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });

        api.getIngredients()
            .then(result => {
                dispatch({
                    type: GET_INGREDIENTS_REQUEST_SUCCESS,
                    payload: result.data
                });
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_INGREDIENTS_REQUEST_FAILED,
                    errorMessage: err
                });
            })


    }
}

export const refreshOrderIndex = (burger: IBurgerConstructorState) => {
    /* @ts-ignore */
    return function(dispatch){
        //обработка данных и получение заказа
        
        dispatch({
            type: CREATE_ORDER_REQUEST
        });

        const requestBody = {
            ingredients: [
                burger.head[0],
                ...burger.body,
                burger.head[1],
            ]
        };

        const token = localStorage.getItem('accessToken');
        
        if(!token){
            return Promise.reject("empty token");
        }

        api.createOrders(requestBody, token)
        .then(result => {
            console.log(CREATE_ORDER_REQUEST_SUCCESS, result);

            dispatch({
                type: CREATE_ORDER_REQUEST_SUCCESS,
                payload: result
            });
            
            dispatch({
                type: CLEAR_CONSTRUCTOR
            });
        })
        .catch(err => {
            console.log(CREATE_ORDER_REQUEST_SUCCESS, err);
            
            dispatch({
                type: CREATE_ORDER_REQUEST_FAILED,
                errorMessage: err
            });
        })
    };
}