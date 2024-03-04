import { createAsyncThunk } from "@reduxjs/toolkit";
import {handleRequest, fetchWithRefresh} from "../../utils/helpers";
import {baseUrl} from '../../constants/common';

export const tryResetPassword = createAsyncThunk(
    "tryResetPassword",
    async (email) => {
        const requestBody = {email};

        return await handleRequest(baseUrl + '/api/password-reset', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(requestBody)
        });
    }
)

export const createNewUser = createAsyncThunk(
    "createNewUser",
    async (userCredentials) => {
        return await handleRequest(baseUrl + '/api/auth/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(userCredentials)
        });
    }
);

export const getUserInfo = createAsyncThunk(
    "auth/getUserInfo",
    async () => {
        const token = localStorage.getItem('accessToken');

        if(!token){
            return Promise.reject("empty token");
        }

        return await fetchWithRefresh(baseUrl + '/api/auth/user', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  token
              }
        });
    }
)

export const patchUserInfo = createAsyncThunk(
    "auth/patchUserInfo",
    async (userInfo) => {
        const token = localStorage.getItem('accessToken');
        
        return await fetchWithRefresh(baseUrl + '/api/auth/user', {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  token
              },
              body: JSON.stringify(userInfo)
        });
    }
)

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userCredentials) => {
        const request = await handleRequest(baseUrl + '/api/auth/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(userCredentials)
        })
        .then(res =>{
            localStorage.setItem("refreshToken",  res.refreshToken); 
            localStorage.setItem("accessToken",  res.accessToken.split("Bearer ").pop());

            return res.user;
        })

        return request;
    }
)

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async () => {
        const request = await handleRequest(baseUrl + '/api/auth/logout', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                token: localStorage.getItem("refreshToken")
            })
        })
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