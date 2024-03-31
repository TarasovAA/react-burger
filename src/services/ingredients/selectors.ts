import { useSelector } from "react-redux";

export const GetAllIngredientsRequestData = ()  => {
    return useSelector((store: any) => store.allIngredients);
}

export const GetAllIngredients = ()  => {
    return useSelector((store: any) => store.allIngredients.allIngredients);
}