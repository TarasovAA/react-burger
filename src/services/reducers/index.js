import { combineReducers } from "@reduxjs/toolkit";

import AllIngredientsReducer from './all-ingredients-reducer';
import BurgerConstructorReducer from './burger-constructor-reducer';
import CurrentViewedIngredientReducer from './current-viewed-ingredient-reducer';
import OrderReducer from './order-reducer';

export const rootReducer = combineReducers({
    allIngredients: AllIngredientsReducer,
    burgerConstructor: BurgerConstructorReducer,
    currentViewedIngredient: CurrentViewedIngredientReducer,
    order: OrderReducer
});