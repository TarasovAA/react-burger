import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { TUserInfo, NewPasswordRequestBody } from "../../utils/types";

export const tryResetPassword = createAsyncThunk(
    "auth/tryResetPassword",
    async (email: string) => {
        return await api.startResetingPassword({email});
    }
)

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async (requestBody: NewPasswordRequestBody) => {
        return await api.finishResettinPassword(requestBody);
    }
)

export const getUserInfo = createAsyncThunk(
    "auth/getUserInfo",
    async () => {
        const token = localStorage.getItem('accessToken');

        if(!token){
            return Promise.reject("empty token");
        }

        return await api.getUser(token);
    }
)

export const patchUserInfo = createAsyncThunk(
    "auth/patchUserInfo",
    async (userInfo: TUserInfo) => {
        const token = localStorage.getItem('accessToken');
        
        if(!token){
            return Promise.reject("empty token");
        }

        return await api.refreshUser(userInfo, token);
    }
)

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userCredentials: Omit<TUserInfo, 'name'>) => {
        const request = await api.sighIn(userCredentials)
                                    .then(res =>{
                                        let accessToken: string = res.accessToken.split("Bearer ").pop() || '';

                                        localStorage.setItem("refreshToken",  res.refreshToken); 
                                        localStorage.setItem("accessToken",  accessToken);

                                        return res.user;
                                    })

        return request;
    }
)

export const registerNewUser = createAsyncThunk(
    "auth/registerNewUser",
    async (userCredentials: TUserInfo) => {
        
        const request =  await api.sighUp(userCredentials)
                                        .then(res =>{
                                            let accessToken: string = res.accessToken.split("Bearer ").pop() || '';

                                            localStorage.setItem("refreshToken",  res.refreshToken); 
                                            localStorage.setItem("accessToken",  accessToken);

                                            return res.user;
                                        });

        return request;
    }
)

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async () => {
        const refreshToken = localStorage.getItem("refreshToken");

        if(!refreshToken){
            return Promise.reject("empty token");
        }

        const request = await api.sighOut(refreshToken)
                                    .then(res => {
                                        if(res.success){
                                            localStorage.removeItem("refreshToken");
                                            localStorage.removeItem("accessToken");
                                        }

                                        return res;
                                    });

        return request;
    }
)