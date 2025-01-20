import { combineReducers } from "@reduxjs/toolkit";
import allIngredientsReducer from './ingredients/reducer';
import burgerConstructorReducer from './constructor/reducer';
import orderReducer from './order/reducer';

import {userReducer} from './auth/reducer';

import { feedWsReducer } from "./web-socket/ws-reducers/feedWsReducer";
import { orderHistoryWsReducer } from "./web-socket/ws-reducers/orderHistoryWsReducer";

export const rootReducer = combineReducers({
    allIngredients: allIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    order: orderReducer,
    user: userReducer,
    feedWs: feedWsReducer,
    orderHistoryWs: orderHistoryWsReducer
});