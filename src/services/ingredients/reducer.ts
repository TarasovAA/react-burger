import {GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_REQUEST_SUCCESS,
    GET_INGREDIENTS_REQUEST_FAILED}
    from './constants';

import { TIngredientsAction,
     IGetIngredientsSuccessAction,
     IGetIngredientsFailedAction} from './action';
import { TIngredient } from '../../utils/types';
    
interface IInitialState{
        allIngredients: Array<TIngredient>;
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


const allIngredientsReducer = (state: IInitialState = initialState, action: TIngredientsAction) : IInitialState => {
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
                allIngredients: (action as IGetIngredientsSuccessAction).payload,
                allIngredientsRequesting: false,
                allIngredientsRequested: true,
                allIngredientsRequestFailed: false
            }
        }
        case GET_INGREDIENTS_REQUEST_FAILED: {
            return {
                ...state,
                errorMessage:  (action as IGetIngredientsFailedAction).errorMessage,
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