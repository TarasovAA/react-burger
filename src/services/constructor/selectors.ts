import { useSelector } from "../hooks";
import { RootState } from "../types";

export const GetBurgerConstructor = () => useSelector((store: RootState) => store.burgerConstructor);

export const GetBurgerConstructorBody = () => useSelector((store: RootState) => store.burgerConstructor.body);