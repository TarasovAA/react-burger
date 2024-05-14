import { useSelector } from "../hooks";
import { RootState } from "../types";

/* eslint-disable */ 
export const getBurgerConstructor = () => useSelector((store: RootState) => store.burgerConstructor);

export const getBurgerConstructorBody = () => useSelector((store: RootState) => store.burgerConstructor.body);