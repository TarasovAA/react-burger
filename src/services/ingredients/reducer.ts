import { TIngredient } from '../../utils/types';
import {GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_REQUEST_SUCCESS,
    GET_INGREDIENTS_REQUEST_FAILED}
    from './constants';

import { TIngredientsAction,
     IGetIngredientsSuccessAction,
     IGetIngredientsFailedAction} from './action';
    

const allIngredientsReducer = (state: IInitialState = initialState, action: TIngredientsAction) => {
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

interface IInitialState{
    allIngredients: Array<IInitialState>;
    isAllIngredientsRequesting: boolean;
    isAllIngredientsRequested: boolean;

    isAllIngredientsRequestFailed: boolean;
    errorMessage: string | null | undefined;
}

const initialState: IInitialState = {
        allIngredients: [],
        isAllIngredientsRequesting: false,
        isAllIngredientsRequested: false,
        isAllIngredientsRequestFailed: false,
        errorMessage: null
    }

export default allIngredientsReducer;