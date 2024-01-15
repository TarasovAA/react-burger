import { combineReducers } from "@reduxjs/toolkit";
import {GET_INGREDIANTS_REQUEST,
        GET_INGREDIANTS_REQUEST_SUCCESS,
        GET_INGREDIANTS_REQUEST_FAILED}
        from '../actions/index';

import AllIngredientsReducer from './all-ingrediants-reducer';
import BurgerConstructorReducer from './burger-constructor-reducer';
import CurrentViewedIngredientReducer from './current-viewed-ingredient-reducer';
import OrderReducer from './order-reducer';

const initialState = {
    ingredients: [],
    allIngredientsRequesting: false,
    allIngredientsRequested: false,
    allIngredientsRequestFailed: false,
    errorMessage: '',

    constructorIngredients: {
        head: [],
        body: [],
    },
    currentViewIngredient: {},
    createdOrder: {}
}

export const rootReducer = combineReducers({
    allIngredients: AllIngredientsReducer,
    burgerConstructor: BurgerConstructorReducer,
    currentViewedIngredient: CurrentViewedIngredientReducer,
    order: OrderReducer
});

export const rootReducer1 = (state = initialState, action) => {
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
