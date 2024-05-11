import { useSelector } from "../hooks";
import { RootState } from "../types";

export const GetAllIngredientsRequestData = ()  => {
    return useSelector((store: RootState) => store.allIngredients);
}

export const GetAllIngredients = ()  => {
    return useSelector((store: RootState) => store.allIngredients.allIngredients);
}

export const GetIngredientsByIds = (ids: Array<string>) => {
    return useSelector((store: RootState) => store.allIngredients.allIngredients.filter((i: any) => ids.includes(i._id)));
}