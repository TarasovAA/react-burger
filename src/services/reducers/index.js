import { combineReducers } from "@reduxjs/toolkit";

import allIngredientsReducer from './all-ingredients-reducer';
import burgerConstructorReducer from './burger-constructor-reducer';
import orderReducer from './order-reducer';

import {tryResetPasswordReducer, userReducer} from './auth';

export const rootReducer = combineReducers({
    allIngredients: allIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    order: orderReducer,
    user: userReducer
});