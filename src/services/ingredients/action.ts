import { TIngredient } from "../../utils/types";
import api from "../api";

import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_REQUEST_SUCCESS,
    GET_INGREDIENTS_REQUEST_FAILED
} from './constants';

import { AppDispatch, AppThunk } from "../types";

export interface IGetIngredientsAction{
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction{
    readonly type: typeof GET_INGREDIENTS_REQUEST_SUCCESS;
    readonly payload: Array<TIngredient>;
}


export interface IGetIngredientsFailedAction{
    readonly type: typeof GET_INGREDIENTS_REQUEST_FAILED;
    readonly errorMessage: string;
}

export type TIngredientsAction = IGetIngredientsAction | IGetIngredientsSuccessAction | IGetIngredientsFailedAction;

export const getIngredients = () : AppThunk => {
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

