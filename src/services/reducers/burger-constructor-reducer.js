import {ADD_INGREDIENT_DATA,
    DELETE_INGREDIENT_DATA,
    SET_CONSTRUCTOR_BUNS,
    CLEAR_CONSTRUCTOR,
    RESET_INGREDIENT_DATA
} from '../actions/index';

const initialState = {
    head: [],
    body: [],
}

const BurgerConstructorReducer = (state = initialState, action) => {
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

export default BurgerConstructorReducer;