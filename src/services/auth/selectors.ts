import { useSelector } from "react-redux";

export const GetUserInfo = ()  => useSelector((store: any) => store.user.user);

export const IsAuthChecked = ()  => useSelector((store: any) => store.user.isAuthChecked);

export const IsForgotPasswordEmailSent = () => useSelector((store: any) => store.user.isForgotPasswordEmailSent);

export const IsPasswordSet = () => useSelector((store: any) => store.user.isPasswordSet);

export const GetUserErrorMessage = () => useSelector((store: any) => store.user.errorMessage);
