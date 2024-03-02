import { createSlice } from "@reduxjs/toolkit"
import { tryResetPassword, createNewUser, loginUser } from "../actions/auth";
import { getUserInfo } from "../actions/auth";


const tryResetPasswordSlice = createSlice({
    name: 'TruResetPassword',
    initialState: {
        isTryResetPasswordActive: false,
        tryResetPasswordSuccess: null,
        message: ''
    },
    reducers: {
        cleaerResetPasswordResponse(state, action) {
            state.tryResetPasswordSuccess = null;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(tryResetPassword.pending, (state) => {state.isTryResetPasswordActive = true;})
            .addCase(tryResetPassword.fulfilled,  (state, action) => {
                state.tryResetPasswordSuccess = action.payload.success;
                state.message = action.payload.message;
                state.isTryResetPasswordActive = false;
                console.log(action.payload);
            })
            .addCase(tryResetPassword.rejected,  (state, action) => {
                state.tryResetPasswordSuccess = false;
                state.message =  action.error.message;
                state.isTryResetPasswordActive = false;
                console.log(action.error);
            })
    }
});

export const tryResetPasswordReducer = tryResetPasswordSlice.reducer;

export const {cleaerResetPasswordResponse} = tryResetPasswordSlice.actions;

const userSlice = createSlice({
    name:"auth/user",
    initialState: {
        isCreateNewUserPending: false,
        errorMessage: '',

        user: null,
        isAuthChecked: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNewUser.pending, (state) => {state.isCreateNewUserPending = true})
            .addCase(createNewUser.fulfilled, (state, action) => {
                state.isCreateNewUserPending = false;
                state.userInfo = action.payload;
            })
            .addCase(createNewUser.rejected, (state, action) => {
                state.isCreateNewUserPending = false;
                state.errorMessage = action.error.message
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                
                localStorage.setItem("refreshToken",  action.payload.refreshToken); 
                localStorage.setItem("accessToken",  action.payload.accessToken.split("Bearer ").pop());
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
    }
})

export const userReducer = userSlice.reducer;

export const {checkAuth} = userSlice.actions;