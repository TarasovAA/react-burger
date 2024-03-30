import {
    handleRequest,
    fetchWithRefresh
} from "../utils/helpers";

import {
    TGetIngredientsResponseBody,
    TUserLogInResponseBody,
    TResponseBody,
    TOrderResponseBody
} from "../utils/types";

import { baseUrl } from "../constants/common";

export class Api{
    //auth
    sighUp = (userCredentials: any): Promise<TUserLogInResponseBody> => {
        return handleRequest<TUserLogInResponseBody>(baseUrl + '/api/auth/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        });
    }

    sighIn = (userCredentials: any): Promise<TUserLogInResponseBody> => {
        return handleRequest<TUserLogInResponseBody>(baseUrl + '/api/auth/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        })
    }

    sighOut = (refreshToken: string) => {
        return handleRequest<TResponseBody>(baseUrl + '/api/auth/logout', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: refreshToken
            })
        });
    }

    startResetingPassword = (requestBody: any): Promise<any> => {
        return handleRequest<TResponseBody>(baseUrl + '/api/password-reset', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
    }

    finishResettinPassword = (requestBody: any): Promise<any> => {
        return handleRequest<TResponseBody>(baseUrl + '/api/password-reset/reset', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
    }

    //user
    getUser = (token: string): Promise<any> => {
        return fetchWithRefresh(baseUrl + '/api/auth/user', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
    }

    refreshUser = (userInfo: any, token: string): Promise<any> => {
        return fetchWithRefresh(baseUrl + '/api/auth/user', {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(userInfo)
        });
    }

    //ingredients

    getIngredients = (): Promise<TGetIngredientsResponseBody> => {
        return handleRequest<TGetIngredientsResponseBody>(baseUrl + '/api/ingredients');
    }


    createOrders = (requestBody: any, token: string): Promise<TOrderResponseBody>  => {
        return fetchWithRefresh(baseUrl + '/api/orders', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  token
            },
            body: JSON.stringify(requestBody)
            });
    }
}

export default new Api();