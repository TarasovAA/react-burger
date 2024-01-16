import {SET_VIEWED_INGREDIANT_ITEM,
         CLEAR_VIEWED_INGREDIANT_ITEM} from '../actions'

const initialState = {
    item: null,
}


const CurrentViewedIngredientReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_VIEWED_INGREDIANT_ITEM:{
            return {
                ...state,
                item: action.payload
            };
        }
        case CLEAR_VIEWED_INGREDIANT_ITEM:{
            return {
                ...state,
                item: null
            };
        }
        default:{
            return state;
        }
    }
}

export default CurrentViewedIngredientReducer;