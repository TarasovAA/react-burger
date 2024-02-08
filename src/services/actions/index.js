import {baseUrl} from '../../constants/common';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_REQUEST_SUCCESS = 'GET_INGREDIAETS_REQUEST_SUCCESS';
export const GET_INGREDIENTS_REQUEST_FAILED = 'GET_INGREDIENTS_REQUEST_FAILED';

export const ADD_INGREDIENT_DATA = 'ADD_CONSTRUCTOR_INGREDIENT';
export const DELETE_INGREDIENT_DATA = 'DELETE_CONSTRUCTOR_INGREDIENT_DATA';
export const SET_CONSTRUCTOR_BUNS = 'SET_CONSTRUCTOR_BUNS';
export const CLEAR_CONSTRUCTOR_BUNS = 'CLEAR_CONSTRUCTOR_BUNS';
export const RESET_INGREDIENT_DATA = 'RESET_INGREDIENT_DATA'

export const SET_VIEWED_INGREDIENT_ITEM = 'SET_VIEWED_INGREDIENT_ITEM';
export const CLEAR_VIEWED_INGREDIENT_ITEM = 'CLEAR_VIEWED_INGREDIENT_ITEM';


export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_REQUEST_SUCCESS = "CREATE_ORDER_REQUEST_SUCCESS";
export const CREATE_ORDER_REQUEST_FAILED = "CREATE_ORDER_REQUEST_FAILED";


export const getIngredients = () => {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });

        fetch(baseUrl + '/api/ingredients')
            .then(result => {
                if (!result.ok)
                    return Promise.reject(`Ошибка ${result.status}`);
                return result.json();
            })
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

export const refreshOrderIndex = (burger) => {
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

        console.log('requestBody', requestBody);
        
        fetch(baseUrl + '/api/orders', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(requestBody)
        })
        .then(result => {
            if(!result.ok)
                return Promise.reject(`Ошибка ${result.status}`);
            
            return result.json();
        })
        .then(result => {
            console.log('CREATE_ORDER_REQUEST_SUCCESS', result);
            dispatch({
                type: CREATE_ORDER_REQUEST_SUCCESS,
                payload: result
            });
        })
        .catch(err => {
            console.log('CREATE_ORDER_REQUEST_FAILED', err);
            dispatch({
                type: CREATE_ORDER_REQUEST_FAILED,
                errorMessage: err
            });
        })

        
    };
}