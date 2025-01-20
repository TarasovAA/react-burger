import { RootState } from "../types";

export const getUserInfo = (store: RootState) => store.user.user;

export const isAuthChecked = (store: RootState) => store.user.isAuthChecked;

export const isForgotPasswordEmailSent = (store: RootState) => store.user.isForgotPasswordEmailSent;

export const isPasswordSet = () => (store: RootState) => store.user.isPasswordSet;

export const getUserErrorMessage = () => (store: RootState) => store.user.errorMessage;
