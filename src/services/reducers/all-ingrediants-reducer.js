import {GET_INGREDIANTS_REQUEST,
    GET_INGREDIANTS_REQUEST_SUCCESS,
    GET_INGREDIANTS_REQUEST_FAILED}
    from '../actions/index';

const initialState = {
        allIngredients: [],
        allIngredientsRequesting: false,
        allIngredientsRequested: false,
    }
    

const AllIngredientsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_INGREDIANTS_REQUEST: {
            return {
                ...state,
                allIngredientsRequesting: true,
                allIngredientsRequested: false,
            };
        }
        case GET_INGREDIANTS_REQUEST_SUCCESS: {
            return {
                ...state,
                allIngredients: action.payload,
                allIngredientsRequesting: false,
                allIngredientsRequested: true,
                allIngredientsRequestFailed: false
            }
        }
        case GET_INGREDIANTS_REQUEST_FAILED: {
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