import { createSlice } from "@reduxjs/toolkit";
import { 
    getUserInfo, 
    patchUserInfo,
    tryResetPassword,
    createNewUser,
    loginUser,
    logoutUser,
    resetPassword
} from "../actions/auth";

const userSlice = createSlice({
    name:"auth/user",
    initialState: {
        isCreateNewUserPending: false,
        errorMessage: '',

        isForgotPasswordEmailSent: false,
        isPasswordSet: false,
        user: null,
        isAuthChecked: false
    },

    reducers: {
        cleaerResetPasswordResponse(state, action) {
            state.tryResetPasswordSuccess = null;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.errorMessage = '';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.errorMessage = action.error.message;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(createNewUser.pending, (state) => {
                state.isCreateNewUserPending = true;
                state.errorMessage = '';
            })
            .addCase(createNewUser.fulfilled, (state, action) => {
                state.isCreateNewUserPending = false;
                state.user = action.payload;
            })
            .addCase(createNewUser.rejected, (state, action) => {
                state.isCreateNewUserPending = false;
                state.errorMessage = action.error.message;
            })
            .addCase(getUserInfo.pending, (state) => {state.isAuthChecked = false; })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isAuthChecked = true;
                console.log('fulfilled');
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.isAuthChecked = true;
                console.log('rejected', action);
            })
            .addCase(patchUserInfo.fulfilled, (state, action) => {
                state.user = action.payload.user;
            })
            
            .addCase(tryResetPassword.fulfilled,  (state) => {
                state.isForgotPasswordEmailSent = true;
                state.isPasswordSet = false;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                console.log(action.payload);
                state.isPasswordSet = true;
            })
    }
})

export const userReducer = userSlice.reducer;

export const {checkAuth, cleaerResetPasswordResponse} = userSlice.actions;