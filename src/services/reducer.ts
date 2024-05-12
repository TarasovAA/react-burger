import { combineReducers } from "@reduxjs/toolkit";

import allIngredientsReducer from './ingredients/reducer';
import burgerConstructorReducer from './constructor/reducer';
import orderReducer from './order/reducer';

import {userReducer} from './auth/reducer';
import { feedReducer } from "./feed/reducer";

import { wsReducer } from "./web-socket/wsReducer";

export const rootReducer = combineReducers({
    allIngredients: allIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    order: orderReducer,
    user: userReducer,
    feed: feedReducer,
    ws: wsReducer
});