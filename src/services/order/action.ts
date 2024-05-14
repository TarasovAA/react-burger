import { IBurgerConstructorState } from "../constructor/action";
import { CLEAR_CONSTRUCTOR } from "../constructor/action";
import api from "../api";
import { AppDispatch, AppThunk } from "../types";

import { 
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_REQUEST_SUCCESS,
    CREATE_ORDER_REQUEST_FAILED
 } from "./constants";

export {CREATE_ORDER_REQUEST, CREATE_ORDER_REQUEST_SUCCESS, CREATE_ORDER_REQUEST_FAILED};

export interface ICreateOrderRequestAction{
    readonly type: typeof CREATE_ORDER_REQUEST;
}

export interface ICreateOrderRequestSuccessAction{
    readonly type: typeof CREATE_ORDER_REQUEST_SUCCESS;
}

export interface ICreateOrderRequestFailedAction{
    readonly type: typeof CREATE_ORDER_REQUEST_FAILED;
}

export type TOrderAction = ICreateOrderRequestAction
                        | ICreateOrderRequestSuccessAction
                        | ICreateOrderRequestFailedAction;

export const refreshOrderIndex = (burger: IBurgerConstructorState): AppThunk => {
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