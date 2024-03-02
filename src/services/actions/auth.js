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


export const loginUser = createAsyncThunk(
    "loginUser",
    async (userCredentials) => {
        return await handleRequest(baseUrl + '/api/auth/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(userCredentials)
        });
    }
)

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