import {REFRESH_ORDER_INDEX} from '../actions';

const initialState = {
    orderIndex: "000000"
}


const OrderReducer = (state = initialState, action) => {
    switch(action.type){
        case REFRESH_ORDER_INDEX:{
            return {
                ...state,
                orderIndex: action.payload
            }
        }
        default:{
            return state;
        }
    }
}

export default OrderReducer;