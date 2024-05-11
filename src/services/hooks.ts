import { 
    TypedUseSelectorHook,
    useSelector as selectorHook,
    useDispatch as dispatchHook
 }
from "react-redux";

import { RootState, AppDispatch, AppThunk } from "./types";


export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

//TODO: правильная запись закоментирована, тк ругается на AppThunk. Разобраться с ошибкой позже.
//export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
export const useDispatch = () => dispatchHook<any>();