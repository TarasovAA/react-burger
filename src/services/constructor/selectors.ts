import { useSelector } from "../hooks";

export const GetBurgerConstructor = () => useSelector((store: any) => store.burgerConstructor);

export const GetBurgerConstructorBody = () => useSelector((store: any) => store.burgerConstructor.body);