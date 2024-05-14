import { useSelector } from "../hooks";
import { RootState } from "../types";

export const GetUserInfo = ()  => useSelector((store: RootState) => store.user.user);

export const IsAuthChecked = ()  => useSelector((store: RootState) => store.user.isAuthChecked);

export const IsForgotPasswordEmailSent = () => useSelector((store: RootState) => store.user.isForgotPasswordEmailSent);

export const IsPasswordSet = () => useSelector((store: RootState) => store.user.isPasswordSet);

export const GetUserErrorMessage = () => useSelector((store: RootState) => store.user.errorMessage);
