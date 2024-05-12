import { useSelector } from "../hooks";
import { RootState } from "../types";
import { createSelector } from "@reduxjs/toolkit";

export const GetAllIngredientsRequestData = ()  => {
    return useSelector((store: RootState) => store.allIngredients);
}

export const GetAllIngredients = ()  => {
    return useSelector((store: RootState) => store.allIngredients.allIngredients);
}

const allIngredients = (store: RootState) => store.allIngredients.allIngredients;

export const GetMemoFilteredIngredients = createSelector([allIngredients, (allIngredients, ids: Array<string>)=>ids], (allIngredients, ids) => allIngredients.filter((i: any) => ids.includes(i._id)))

export const GetIngredientsByIds = (ingredients: Array<string>) => {
    return useSelector((store: RootState) => GetMemoFilteredIngredients(store, ingredients));
}