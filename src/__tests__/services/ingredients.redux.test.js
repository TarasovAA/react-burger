import { initialState } from "../../services/ingredients/reducer";
import reducer from "../../services/ingredients/reducer";

import {GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_REQUEST_SUCCESS,
    GET_INGREDIENTS_REQUEST_FAILED}
    from '../../services/ingredients/constants';

import { data } from "../../utils/data";

import { getIngredients } from "../../services/ingredients/action";
import { store } from "../../services/store";

describe('Ingredients redux reducers', () => {
    // beforeEach({

    // });

    // afterEach(() => {})

    //необязательный тест
    // test('test a', () => {
    //     const initialState = {
    //         allIngredients: [],
    //         allIngredientsRequesting: false,
    //         allIngredientsRequested: false,
    //         allIngredientsRequestFailed: false,
    //         errorMessage: null
    //     }

    //     fetch.mockImplementationOnce(() => Promise.resolve({
    //         ok: true,
    //         json: () => Promise.resolve({})
    //     }));

    //     const expectedActions = [];

    //     return store.dispatch(getIngredients()).then(() => {
    //         expect(store.getActions()).toEqual(expectedActions);
    //     })

    // })



    test('should return default state', () => {
        expect(reducer(undefined, {type: 'INCORRECT_TYPE'})).toEqual(
            initialState
        );
    })

    test('should return state after GET_INGREDIENTS_REQUEST action', () => {
        expect(reducer(undefined, {type: GET_INGREDIENTS_REQUEST})).toEqual({
            ...initialState,
            allIngredientsRequesting: true,
            allIngredientsRequested: false
        })
        
    });

    
    test('should return state after GET_INGREDIENTS_REQUEST_SUCCESS action', () => {
        const testObj = data;

        expect(reducer(undefined, {type: GET_INGREDIENTS_REQUEST_SUCCESS, payload: testObj})).toEqual({
            ...initialState,
            allIngredients: testObj,
            allIngredientsRequesting: false,
            allIngredientsRequested: true,
            allIngredientsRequestFailed: false
        })
        
    });

    test('should return state after GET_INGREDIENTS_REQUEST_FAILED action', () => {
        const testObj = 'Something went wrong!';

        expect(reducer(undefined, {type: GET_INGREDIENTS_REQUEST_FAILED, errorMessage: 'Something went wrong!'})).toEqual({
            ...initialState,
            errorMessage: testObj,
            allIngredientsRequesting: false,
            allIngredientsRequestFailed: true
        })
    });


    // it('should create GET_INGREDIENTS_REQUEST action with correct loading info', () => {
        
    // })
})