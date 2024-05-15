import { TIngredient, TConstructorIngredient } from "../../utils/types";

import { 
    ADD_INGREDIENT_DATA,
    DELETE_INGREDIENT_DATA, 
    SET_CONSTRUCTOR_BUNS,
    RESET_INGREDIENT_DATA,
    CLEAR_CONSTRUCTOR
} from "./constants";

export {ADD_INGREDIENT_DATA, DELETE_INGREDIENT_DATA, SET_CONSTRUCTOR_BUNS, RESET_INGREDIENT_DATA, CLEAR_CONSTRUCTOR};

export interface IAddIngredientDataAction{
    readonly type: typeof ADD_INGREDIENT_DATA;
    readonly payload: TConstructorIngredient;
}

export interface IDeleteIngredientDataAction{
    readonly type: typeof DELETE_INGREDIENT_DATA;
    readonly index: Number;
}

export interface ISetConstructorBunsAction{
    readonly type: typeof SET_CONSTRUCTOR_BUNS;
    readonly payload: TIngredient;
}

export interface IResetIngredientDataAction{
    readonly type: typeof RESET_INGREDIENT_DATA;
    readonly payload: Array<TConstructorIngredient>;
}

export interface IClearConstructorAction{
    readonly type: typeof CLEAR_CONSTRUCTOR;
}

export type TConstructorAction = IAddIngredientDataAction 
                                | IDeleteIngredientDataAction
                                | ISetConstructorBunsAction
                                | IResetIngredientDataAction
                                | IClearConstructorAction;

export interface IBurgerConstructorState{
    head: Array<TIngredient>
    body: Array<TConstructorIngredient>
}
