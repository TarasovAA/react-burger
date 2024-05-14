import {
    handleRequest,
    fetchWithRefresh
} from "../utils/helpers";

import {
    TGetIngredientsResponseBody,
    TUserLogInResponseBody,
    TResponseBody,
    TOrderResponseBody,
    TGetUserResponseBody,
    TRefreshUserResponseBody,
    TAllOrdersResponseBody,
    NewPasswordRequestBody,
    TUserInfoWithEmptyFields,
    TUserInfo,
    TUserShortInfo,
    TIngredient
} from "../utils/types";

import { baseUrl } from "../constants/common";

class Api{
    //auth
    sighUp = (userCredentials: TUserInfo): Promise<TUserLogInResponseBody> => {
        return handleRequest<TUserLogInResponseBody>(baseUrl + '/api/auth/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        });
    }

    sighIn = (userCredentials: TUserShortInfo): Promise<TUserLogInResponseBody> => {
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

    startResetingPassword = (requestBody: {email: string}): Promise<TResponseBody> => {
        return handleRequest<TResponseBody>(baseUrl + '/api/password-reset', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
    }

    finishResettinPassword = (requestBody: NewPasswordRequestBody): Promise<TResponseBody> => {
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
    getUser = (token: string): Promise<TGetUserResponseBody> => {
        return fetchWithRefresh<TGetUserResponseBody>(baseUrl + '/api/auth/user', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
    }

    refreshUser = (userInfo: TUserInfoWithEmptyFields, token: string): Promise<TGetUserResponseBody> => {
        return fetchWithRefresh<TRefreshUserResponseBody>(baseUrl + '/api/auth/user', {
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


    createOrders = (requestBody: { ingredients: Array<TIngredient> }, token: string): Promise<TOrderResponseBody>  => {
        return fetchWithRefresh<TOrderResponseBody>(baseUrl + '/api/orders', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  token
            },
            body: JSON.stringify(requestBody)
            });
    }

    
    getOrderInfo = (orderId: string): Promise<TAllOrdersResponseBody> => {
        return handleRequest<TAllOrdersResponseBody>(baseUrl + '/api/orders/' + orderId);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Api();