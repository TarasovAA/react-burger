import {baseUrl} from '../../constants/common';
import { handleRequest, fetchWithRefresh } from '../../utils/helpers';
import { TGetIngredientsResponseBody, TIngredient } from '../../utils/types';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_REQUEST_SUCCESS = 'GET_INGREDIENTS_REQUEST_SUCCESS';
export const GET_INGREDIENTS_REQUEST_FAILED = 'GET_INGREDIENTS_REQUEST_FAILED';

export const ADD_INGREDIENT_DATA = 'ADD_CONSTRUCTOR_INGREDIENT';
export const DELETE_INGREDIENT_DATA = 'DELETE_CONSTRUCTOR_INGREDIENT_DATA';
export const SET_CONSTRUCTOR_BUNS = 'SET_CONSTRUCTOR_BUNS';
export const RESET_INGREDIENT_DATA = 'RESET_INGREDIENT_DATA'
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_REQUEST_SUCCESS = "CREATE_ORDER_REQUEST_SUCCESS";
export const CREATE_ORDER_REQUEST_FAILED = "CREATE_ORDER_REQUEST_FAILED";

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

        handleRequest<TGetIngredientsResponseBody>(baseUrl + '/api/ingredients')
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
        
        fetchWithRefresh(baseUrl + '/api/orders', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  token
              },
            body: JSON.stringify(requestBody)
        })
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