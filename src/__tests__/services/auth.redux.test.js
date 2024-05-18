import {userReducer as reducer, initialState } from "../../services/auth/reducer";
import {
    loginUser,
    logoutUser,
    registerNewUser,
    getUserInfo,
    patchUserInfo,
    tryResetPassword,
    resetPassword
} from "../../services/auth/action";

const defaultUser = {
    name: 'user 1',
    email: 'user@mail.ru',
    password: '1234'
}

describe('User redux reducers', () => {
    
    //loginUser
    test('should return state of loginUser after auth/loginUser/pending', () => {
        expect(reducer(undefined, {type: loginUser.pending.type})).toEqual({
            ...initialState,
            errorMessage: ''
        });
    })

    test('should return state of loginUser after auth/loginUser.fulfilled', () => {
        const testObj = {
            payload: {
                name: 'user 1',
                email: 'user@mail.ru',
                password: '1234'
            }
        }
        

        expect(reducer(undefined, {type: loginUser.fulfilled.type, ...testObj})).toEqual({
            ...initialState,
            user: {
                name: 'user 1',
                email: 'user@mail.ru',
                password: '1234'
            }
        });
    })

    test('should return state of loginUser after auth/loginUser.rejected', () => {
        const testObj = {
            error: {
                message: 'Some error happened',
            }
        };
        
        expect(reducer(undefined, {type: loginUser.rejected.type, ...testObj})).toEqual({
            ...initialState,
            errorMessage: 'Some error happened'
        });
    })

    //logoutUser
    test('should return state of logoutUser after logoutUser.fulfilled', () => {
        expect(reducer(undefined, { type: logoutUser.fulfilled.type })).toEqual({
            ...initialState,
            user: null
        });
    })

    //registerNewUser
    test('should return state of registerNewUser after registerNewUser.pending', () => {
        expect(reducer(undefined, { type: registerNewUser.pending.type })).toEqual({
            ...initialState,
            isCreateNewUserPending: true,
            errorMessage: ''
        });
    })

    test('should return state of registerNewUser after  registerNewUser.fulfilled', () => {
        const testObj = {
            payload: {
                name: 'user 1',
                email: 'user@mail.ru',
                password: '1234'
            }
        }

        expect(reducer({...initialState, isCreateNewUserPending: true }, { type: registerNewUser.fulfilled.type, ...testObj })).toEqual({
            ...initialState,
            isCreateNewUserPending: false,
            user: testObj.payload
        });
    })

    test('should return state of registerNewUser after  registerNewUser.rejected', () => {
        const testObj = {
            error: {
                message: 'Some error happened'
            }
        }

        expect(reducer({...initialState, isCreateNewUserPending: true }, { type: registerNewUser.rejected.type, ...testObj })).toEqual({
            ...initialState,
            isCreateNewUserPending: false,
            errorMessage: testObj.error.message
        });
    })

    //getUserInfo
    test('should return state of getUserInfo after getUserInfo.pending', () => {
        expect(reducer(undefined, { type: getUserInfo.pending.type })).toEqual({
            ...initialState,
            isAuthChecked: false,
        });
    })
    
    test('should return state of getUserInfo after getUserInfo.fulfilled', () => {
        const testObj = {
            payload: {
                user: {
                    name: 'user 1',
                    email: 'user@mail.ru'
                }
                
            }
        }

        expect(reducer({...initialState, isAuthChecked: false}, { type: getUserInfo.fulfilled.type, ...testObj })).toEqual({
            ...initialState,
            isAuthChecked: true,
            user: testObj.payload.user
        });
    })

    //patchUserInfo
    test('should return state of patchUserInfo with another name after patchUserInfo.fulfilled', () => {
        
        const testObj = {
            payload: {
                user: {
                    ...defaultUser,
                    name: 'user 2',
                }
            }
        }
        expect(reducer({...initialState, user: {...defaultUser}}, { type: patchUserInfo.fulfilled.type, ...testObj })).toEqual({
            ...initialState,
            user: {
                ...defaultUser,
                name: 'user 2'
            },
        });
    })

    test('should return state of patchUserInfo with another email after patchUserInfo.fulfilled', () => {
        
        const testObj = {
            payload: {
                user: {
                    ...defaultUser,
                    email: 'user2@mail.ru',
                }
            }
        }
        expect(reducer({...initialState, user: {...defaultUser}}, { type: patchUserInfo.fulfilled.type, ...testObj })).toEqual({
            ...initialState,
            user: {
                ...defaultUser,
                email: 'user2@mail.ru'
            },
        });
    })

    test('should return state of patchUserInfo with another password after patchUserInfo.fulfilled', () => {
        
        const testObj = {
            payload: {
                user: {
                    ...defaultUser,
                    password: '0000',
                }
            }
        }
        expect(reducer({...initialState, user: {...defaultUser}}, { type: patchUserInfo.fulfilled.type, ...testObj })).toEqual({
            ...initialState,
            user: {
                ...defaultUser,
                password: '0000'
            },
        });
    })

    //tryResetPassword
    test('should return state of tryResetPassword after tryResetPassword.fulfilled', () => {
        expect(reducer(undefined, { type: tryResetPassword.fulfilled.type })).toEqual({
            ...initialState,
            isForgotPasswordEmailSent: true,
            isPasswordSet: false,
        });
    })

    //resetPassword
    test('should return state of resetPassword after resetPassword.fulfilled', () => {
        expect(reducer({...initialState, isForgotPasswordEmailSent: true, isPasswordSet: false}, { type: resetPassword.fulfilled.type })).toEqual({
            ...initialState,
            isForgotPasswordEmailSent: true,
            isPasswordSet: true,
        });
    })
})