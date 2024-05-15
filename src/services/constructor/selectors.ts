import { RootState } from "../types";

export const getBurgerConstructor = (store: RootState) => store.burgerConstructor;

export const getBurgerConstructorBody = (store: RootState) => store.burgerConstructor.body;