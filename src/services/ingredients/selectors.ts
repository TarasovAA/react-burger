import { useSelector } from "react-redux";

export const GetAllIngredientsRequestData = ()  => {
    return useSelector((store: any) => store.allIngredients);
}

export const GetAllIngredients = ()  => {
    return useSelector((store: any) => store.allIngredients.allIngredients);
}

export const GetIngredientsByIds = (ids: Array<string>) => {
    return useSelector((store: any) => store.allIngredients.allIngredients.filter((i: any) => ids.includes(i._id)));
}