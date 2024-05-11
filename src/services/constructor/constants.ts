const constructor = "CONSTRUCTOR";

const ADD_INGREDIENT_DATA_TYPE = `${constructor}/ADD_INGREDIENT`;
const DELETE_INGREDIENT_DATA_TYPE = `${constructor}/DELETE_INGREDIENT`;
const SET_CONSTRUCTOR_BUNS_TYPE = `${constructor}/SET_BUNS`;
const RESET_INGREDIENT_DATA_TYPE = `${constructor}/RESET_INGREDIENT`;
const CLEAR_CONSTRUCTOR_TYPE = `${constructor}/CLEAR`;

export const ADD_INGREDIENT_DATA: typeof ADD_INGREDIENT_DATA_TYPE = ADD_INGREDIENT_DATA_TYPE;
export const DELETE_INGREDIENT_DATA: typeof DELETE_INGREDIENT_DATA_TYPE = DELETE_INGREDIENT_DATA_TYPE;
export const SET_CONSTRUCTOR_BUNS: typeof SET_CONSTRUCTOR_BUNS_TYPE = SET_CONSTRUCTOR_BUNS_TYPE;
export const RESET_INGREDIENT_DATA: typeof RESET_INGREDIENT_DATA_TYPE = RESET_INGREDIENT_DATA_TYPE;
export const CLEAR_CONSTRUCTOR: typeof CLEAR_CONSTRUCTOR_TYPE = CLEAR_CONSTRUCTOR_TYPE;
