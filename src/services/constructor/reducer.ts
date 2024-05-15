import {ADD_INGREDIENT_DATA,
    DELETE_INGREDIENT_DATA,
    SET_CONSTRUCTOR_BUNS,
    CLEAR_CONSTRUCTOR,
    RESET_INGREDIENT_DATA,
} from '../constructor/constants';

import {
    IBurgerConstructorState,
    IAddIngredientDataAction,
    IDeleteIngredientDataAction,
    ISetConstructorBunsAction,
    IResetIngredientDataAction,
    TConstructorAction
} from '../constructor/action';

const initialState: IBurgerConstructorState = {
    head: [],
    body: [],
}

const burgerConstructorReducer = (state = initialState, action: TConstructorAction): IBurgerConstructorState => {
    switch(action.type){
        case ADD_INGREDIENT_DATA:{
            return {
                ...state,
                body: [
                    ...state.body,
                    (action as IAddIngredientDataAction).payload
                ]
            };
        }
        case DELETE_INGREDIENT_DATA:{
            return {
                ...state,
                body: {...state}.body.filter((_, key) => key !== (action as IDeleteIngredientDataAction).index)
            };
        }
        case SET_CONSTRUCTOR_BUNS:{
            return {
                ...state,
                head: [
                    (action as ISetConstructorBunsAction).payload,
                    (action as ISetConstructorBunsAction).payload
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
                body: (action as IResetIngredientDataAction).payload
            };
        }
        default:{
            return state;
        }
    }
}

export default burgerConstructorReducer;