import { TOrderResponseBody } from '../../utils/types';
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_REQUEST_SUCCESS,
    CREATE_ORDER_REQUEST_FAILED
} from '../order/action';

interface IOrderState{
    isCreating: boolean;
    isCreated: boolean;
    orderNamber: number | null | unknown;
    name: string | null;
    isCreatingError: boolean;
    creatingErrorMessage: string | null | undefined;
}

interface IOrderAction{
    type: typeof CREATE_ORDER_REQUEST | typeof CREATE_ORDER_REQUEST_SUCCESS | typeof CREATE_ORDER_REQUEST_FAILED;
    payload: TOrderResponseBody;
    errorMessage: string | null | undefined;
}


const initialState: IOrderState = {
    isCreating: false,
    isCreated: false,
    orderNamber: null,
    name: null,
    isCreatingError: false,
    creatingErrorMessage: '',
}


const orderReducer = (state: IOrderState = initialState, action: IOrderAction) => {
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