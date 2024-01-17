import {ADD_INGREDIANT_DATA,
    DELETE_INGREDIANT_DATA,
    SET_CONSTRUCTOR_BUNS,
    CLEAR_CONSTRUCTOR_BUNS
} from '../actions/index';

const initialState = {
    head: [],
    body: [],
}

const BurgerConstructorReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_INGREDIANT_DATA:{
            return {
                ...state,
                body: {...state}.body.push(action.payload)
            };
        }
        case DELETE_INGREDIANT_DATA:{
            return {
                ...state,
                body: {...state}.body.filter((_, key) => key !== action.index)
            };
        }
        case SET_CONSTRUCTOR_BUNS:{
            return {
                ...state,
            };
        }
        case CLEAR_CONSTRUCTOR_BUNS:{
            return {
                ...state
            };
        }
        default:{
            return state;
        }
    }
}

export default BurgerConstructorReducer;