

import { IBurgerConstructorState } from "../constructor/action";
import { CLEAR_CONSTRUCTOR } from "../constructor/action";
import api from "../api";

const order = "ORDER";

export const CREATE_ORDER_REQUEST = `${order}/CREATE_REQUEST`;
export const CREATE_ORDER_REQUEST_SUCCESS = `${order}/CREATE_REQUEST_SUCCESS`;
export const CREATE_ORDER_REQUEST_FAILED = `${order}/CREATE_REQUEST_FAILED`;

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