import { combineReducers } from "@reduxjs/toolkit";

import AllIngredientsReducer from './all-ingredients-reducer';
import BurgerConstructorReducer from './burger-constructor-reducer';
import OrderReducer from './order-reducer';

import {tryResetPasswordReducer, userReducer} from './auth';

export const rootReducer = combineReducers({
    allIngredients: AllIngredientsReducer,
    burgerConstructor: BurgerConstructorReducer,
    order: OrderReducer,
    tryResetPasswordReducer: tryResetPasswordReducer,
    user: userReducer
});