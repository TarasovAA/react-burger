import {CREATE_ORDER_REQUEST,
        CREATE_ORDER_REQUEST_SUCCESS,
        CREATE_ORDER_REQUEST_FAILED} from '../actions';

const initialState = {
    isCreating: false,
    isCreated: false,
    orderNamber: null,
    name: null,
    isCreatingError: false,
    creatingErrorMessage: '',
}


const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_ORDER_REQUEST:{
            return {
                ...state,
                isCreating: true,
                isCreatingError: false,
                creatingErrorMessage: ''
            }
        }
        case CREATE_ORDER_REQUEST_SUCCESS:{
            return {
                ...state,
                orderNamber: action.payload.order.number,
                name: action.payload.name,
                isCreating: false,
                isCreated: true,
            }
        }
        case CREATE_ORDER_REQUEST_FAILED:{
            return {
                ...state,
                isCreating: false,
                isCreatingError: true,
                creatingErrorMessage: action.errorMessage
            }
        }
        default:{
            return state;
        }
    }
}

export default orderReducer;