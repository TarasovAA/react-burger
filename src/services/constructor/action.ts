import { TIngredient } from "../../utils/types";

const constructor = "CONSTRUCTOR";

export const ADD_INGREDIENT_DATA = `${constructor}/ADD_INGREDIENT`;
export const DELETE_INGREDIENT_DATA = `${constructor}/DELETE_INGREDIENT`;
export const SET_CONSTRUCTOR_BUNS = `${constructor}/SET_BUNS`;
export const RESET_INGREDIENT_DATA = `${constructor}/RESET_INGREDIENT`;
export const CLEAR_CONSTRUCTOR = `${constructor}/CLEAR`;

export interface IBurgerConstructorState{
    head: Array<TIngredient>
    body: Array<TIngredient>
}
