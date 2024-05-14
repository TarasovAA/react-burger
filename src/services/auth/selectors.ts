import { useSelector } from "../hooks";
import { RootState } from "../types";

/* eslint-disable */ 
export const getUserInfo = () => useSelector((store: RootState) => store.user.user);

export const isAuthChecked = ()  => useSelector((store: RootState) => store.user.isAuthChecked);

export const isForgotPasswordEmailSent = () => useSelector((store: RootState) => store.user.isForgotPasswordEmailSent);

export const isPasswordSet = () => useSelector((store: RootState) => store.user.isPasswordSet);

export const getUserErrorMessage = () => useSelector((store: RootState) => store.user.errorMessage);
