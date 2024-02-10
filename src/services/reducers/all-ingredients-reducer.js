import {GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_REQUEST_SUCCESS,
    GET_INGREDIENTS_REQUEST_FAILED}
    from '../actions/index';

const initialState = {
        allIngredients: [],
        allIngredientsRequesting: false,
        allIngredientsRequested: false,
    }
    

const AllIngredientsReducer = (state = initialState, action) => {
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

export default AllIngredientsReducer;