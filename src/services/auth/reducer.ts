import { createSlice } from "@reduxjs/toolkit";
import { 
    getUserInfo, 
    patchUserInfo,
    tryResetPassword,
    registerNewUser,
    loginUser,
    logoutUser,
    resetPassword
} from "./action";
import { TGetUserResponseBody, TResponseBody, TUserInfo } from "../../utils/types";

import { PayloadAction } from "@reduxjs/toolkit";

interface IUserState{
    isCreateNewUserPending: boolean;
    errorMessage: string | null | undefined;
    isForgotPasswordEmailSent: boolean;
    isPasswordSet: boolean;
    user: TUserInfo | null;
    isAuthChecked: boolean;
    message: string | null;

    tryResetPasswordSuccess: string | null;
}

export const initialState : IUserState = {
    isCreateNewUserPending: false,
    errorMessage: '',

    isForgotPasswordEmailSent: false,
    isPasswordSet: false,
    user: null,
    isAuthChecked: false,
    message: null,

    tryResetPasswordSuccess: null
}

const userSlice = createSlice({
    name:"auth/user",
    initialState,
    reducers: {
        cleaerResetPasswordResponse(state: IUserState) {
            state.tryResetPasswordSuccess = null;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state: IUserState) => {
                state.errorMessage = '';
            })
            .addCase(loginUser.fulfilled, (state:IUserState, action: PayloadAction<TUserInfo>) => {
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state:IUserState, action) => {
                state.errorMessage = action.error.message;
            })
            .addCase(logoutUser.fulfilled, (state:IUserState) => {
                state.user = null;
            })
            .addCase(registerNewUser.pending, (state:IUserState) => {
                state.isCreateNewUserPending = true;
                state.errorMessage = '';
            })
            .addCase(registerNewUser.fulfilled, (state:IUserState, action: PayloadAction<TUserInfo>) => {
                state.isCreateNewUserPending = false;
                state.user = action.payload;
            })
            .addCase(registerNewUser.rejected, (state:IUserState, action) => {
                state.isCreateNewUserPending = false;
                state.errorMessage = action.error.message;
            })
            .addCase(getUserInfo.pending, (state:IUserState) => {state.isAuthChecked = false; })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isAuthChecked = true;
                console.log('fulfilled');
            })
            .addCase(getUserInfo.rejected, (state:IUserState, action) => {
                state.isAuthChecked = true;
                console.log('rejected', action);
            })
            .addCase(patchUserInfo.fulfilled, (state, action: PayloadAction<TGetUserResponseBody>) => {
                state.user = action.payload.user;
            })
            
            .addCase(tryResetPassword.fulfilled, (state:IUserState) => {
                state.isForgotPasswordEmailSent = true;
                state.isPasswordSet = false;
            })
            .addCase(resetPassword.fulfilled, (state:IUserState, action: PayloadAction<TResponseBody>) => {
                console.log(action.payload);
                state.isPasswordSet = true;
            })
    }
})

export const userReducer = userSlice.reducer;

export const {cleaerResetPasswordResponse} = userSlice.actions;

type TUserInfoActionCreator = typeof userSlice.actions;

export type TUserInfoAction  = ReturnType<TUserInfoActionCreator[keyof TUserInfoActionCreator]>;