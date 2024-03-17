import { TIngredient } from '../../utils/types';
import {GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_REQUEST_SUCCESS,
    GET_INGREDIENTS_REQUEST_FAILED}
    from '../actions/index';

interface IAllIngredientsIngredientAction{
    type: typeof GET_INGREDIENTS_REQUEST | typeof GET_INGREDIENTS_REQUEST_SUCCESS | typeof GET_INGREDIENTS_REQUEST_FAILED,
    payload: TIngredient | unknown | undefined;
    errorMessage: string | undefined;
}

interface IInitialState{
    allIngredients: Array<IInitialState>;
    allIngredientsRequesting: boolean;
    allIngredientsRequested: boolean;

    allIngredientsRequestFailed: boolean;
    errorMessage: string | null | undefined;
}

const initialState: IInitialState = {
        allIngredients: [],
        allIngredientsRequesting: false,
        allIngredientsRequested: false,
        allIngredientsRequestFailed: false,
        errorMessage: null
    }
    

const allIngredientsReducer = (state: IInitialState = initialState, action: IAllIngredientsIngredientAction) => {
    switch(action.type){
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                allIngredientsRequesting: true,
                allIngredientsRequested: false,
            };
        }
        case GET_INGREDIENTS_REQUEST_SUCCESS: {
            return {
                ...state,
                allIngredients: action.payload,
                allIngredientsRequesting: false,
                allIngredientsRequested: true,
                allIngredientsRequestFailed: false
            }
        }
        case GET_INGREDIENTS_REQUEST_FAILED: {
            return {
                ...state,
                errorMessage: action.errorMessage,
                allIngredientsRequesting: false,
                allIngredientsRequestFailed: true
            }
        }
        default: {
            return state;
        }
    }
}

export default allIngredientsReducer;