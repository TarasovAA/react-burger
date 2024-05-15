import { RootState } from "../types";
import { createSelector } from "@reduxjs/toolkit";

export const getAllIngredientsRequestData = (store: RootState) => store.allIngredients;

export const getAllIngredients = (store: RootState) => store.allIngredients.allIngredients;

const allIngredients = (store: RootState) => store.allIngredients.allIngredients;

export const getMemoFilteredIngredients = createSelector([allIngredients, (allIngredients, ids: Array<string>)=>ids], (allIngredients, ids) => allIngredients.filter(i => ids.includes(i._id)))

export const getIngredientsByIds = (ingredients: Array<string>) => (store: RootState) => getMemoFilteredIngredients(store, ingredients);