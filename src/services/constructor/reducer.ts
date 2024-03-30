import { TIngredient } from '../../utils/types';
import {ADD_INGREDIENT_DATA,
    DELETE_INGREDIENT_DATA,
    SET_CONSTRUCTOR_BUNS,
    CLEAR_CONSTRUCTOR,
    RESET_INGREDIENT_DATA,
    IBurgerConstructorState
} from '../constructor/action';




interface IBurgerConstructorAction{
    type: typeof ADD_INGREDIENT_DATA | typeof DELETE_INGREDIENT_DATA | typeof SET_CONSTRUCTOR_BUNS | typeof CLEAR_CONSTRUCTOR | typeof RESET_INGREDIENT_DATA,
    payload: Array<TIngredient> | TIngredient;
    index: number;
}

const initialState: IBurgerConstructorState = {
    head: [],
    body: [],
}

const burgerConstructorReducer = (state = initialState, action: IBurgerConstructorAction) => {
    switch(action.type){
        case ADD_INGREDIENT_DATA:{
            return {
                ...state,
                body: [
                    ...state.body,
                    action.payload
                ]
            };
        }
        case DELETE_INGREDIENT_DATA:{
            return {
                ...state,
                body: {...state}.body.filter((_, key) => key !== action.index)
            };
        }
        case SET_CONSTRUCTOR_BUNS:{
            return {
                ...state,
                head: [
                    action.payload,
                    action.payload
                ]
            };
        }
        case CLEAR_CONSTRUCTOR:{
            return {
                head: [],
                body: []
            };
        }
        case RESET_INGREDIENT_DATA:{
            return {
                ...state,
                body: action.payload
            };
        }
        default:{
            return state;
        }
    }
}

export default burgerConstructorReducer;