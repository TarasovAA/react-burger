import {ADD_INGREDIANT_DATA,
    DELETE_INGREDIANT_DATA,
    SET_CONSTRUCTOR_BUNS,
    CLEAR_CONSTRUCTOR_BUNS,
    RESET_INGREDIANT_DATA
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
                body: [
                    ...state.body,
                    action.payload
                ]
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
                head: [
                    action.payload,
                    action.payload
                ]
            };
        }
        case CLEAR_CONSTRUCTOR_BUNS:{
            return {
                ...state
            };
        }
        case RESET_INGREDIANT_DATA:{
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