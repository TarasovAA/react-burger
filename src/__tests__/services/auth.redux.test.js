import {userReducer as reducer, initialState } from "../../services/auth/reducer";

describe('User redux reducers', () => {
    test('should return default state', () => {
        expect(reducer(undefined, {type: 'INCORRECT_TYPE'})).toEqual(
            initialState
        );
    })
})