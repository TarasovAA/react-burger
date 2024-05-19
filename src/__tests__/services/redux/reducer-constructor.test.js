import reducer, { initialState } from "../../../services/constructor/reducer";

import {ADD_INGREDIENT_DATA,
    DELETE_INGREDIENT_DATA,
    SET_CONSTRUCTOR_BUNS,
    CLEAR_CONSTRUCTOR,
    RESET_INGREDIENT_DATA,
} from '../../../services/constructor/constants';


const testConstructorBodyData = [
    {
       "_id":"60666c42cc7b410027a1a9b5",
       "name":"Говяжий метеорит (отбивная)",
       "type":"main",
       "proteins":800,
       "fat":800,
       "carbohydrates":300,
       "calories":2674,
       "price":3000,
       "image":"https://code.s3.yandex.net/react/code/meat-04.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
       "uniqueId": "42A1F34B-3E89-45B7-9778-03A805C33186"
    },
    {
       "_id":"60666c42cc7b410027a1a9bf",
       "name":"Сыр с астероидной плесенью",
       "type":"main",
       "proteins":84,
       "fat":48,
       "carbohydrates":420,
       "calories":3377,
       "price":4142,
       "image":"https://code.s3.yandex.net/react/code/cheese.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
       "uniqueId": "D355A62A-0832-4D07-9780-7B479C10FB54"
    }
 ]

const testConstructorHeadData = [
    {
        "_id":"60666c42cc7b410027a1a9b1",
        "name":"Краторная булка N-200i",
        "type":"bun",
        "proteins":80,
        "fat":24,
        "carbohydrates":53,
        "calories":420,
        "price":1255,
        "image":"https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
     },
     {
        "_id":"60666c42cc7b410027a1a9b1",
        "name":"Краторная булка N-200i",
        "type":"bun",
        "proteins":80,
        "fat":24,
        "carbohydrates":53,
        "calories":420,
        "price":1255,
        "image":"https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
     }
];

describe('Constructor redux reducers', () => {

    test('should return default state', () => {
        expect(reducer(undefined, {type: 'INCORRECT_TYPE'})).toEqual(
            initialState
        );
    })

    test('should return state with added ingredient in body after ADD_INGREDIENT_DATA action', () => {
        const testObj = {...initialState,
            body:  [...testConstructorBodyData]
        };
        const payloadObj = {
            "_id":"60666c42cc7b410027a1a9b5",
            "name":"Говяжий метеорит (отбивная)",
            "type":"main",
            "proteins":800,
            "fat":800,
            "carbohydrates":300,
            "calories":2674,
            "price":3000,
            "image":"https://code.s3.yandex.net/react/code/meat-04.png",
            "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
            "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
            "uniqueId": "9CA727F5-094F-422E-8FB4-3E8FF346E4DD"
         };


        expect(reducer(testObj,  {type: ADD_INGREDIENT_DATA, payload: payloadObj}))
        .toEqual({
            ...testObj,
            body: [...testObj.body, payloadObj]
        });
    })

    test('should return state without deleted ingredient in body after DELETE_INGREDIENT_DATA action', () => {
        const testObj = {...initialState,
            body: testConstructorBodyData
        };
        const index = 1;

        expect(reducer(testObj,  {type: DELETE_INGREDIENT_DATA, index}))
        .toEqual({
            ...testObj,
            body: [
                {
                   "_id":"60666c42cc7b410027a1a9b5",
                   "name":"Говяжий метеорит (отбивная)",
                   "type":"main",
                   "proteins":800,
                   "fat":800,
                   "carbohydrates":300,
                   "calories":2674,
                   "price":3000,
                   "image":"https://code.s3.yandex.net/react/code/meat-04.png",
                   "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                   "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
                   "uniqueId": "42A1F34B-3E89-45B7-9778-03A805C33186"
                },
             ]
        });

    })
    
    test('should return state with a set bun in the head after SET_CONSTRUCTOR_BUNS action', () => {
        const testState = {
            ...initialState,
            head: testConstructorHeadData
        }

        const testBun =  {
            "_id":"60666c42cc7b410027a1a9b2",
            "name":"Флюоресцентная булка R2-D3",
            "type":"bun",
            "proteins":44,
            "fat":26,
            "carbohydrates":85,
            "calories":643,
            "price":988,
            "image":"https://code.s3.yandex.net/react/code/bun-01.png",
            "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
            "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
         }

        expect(reducer(testState,  {type: SET_CONSTRUCTOR_BUNS, payload: testBun}))
            .toEqual({
                ...initialState,
                head: [
                    testBun, testBun
                ]
            })
    })

    test('should return state with empty body and head after CLEAR_CONSTRUCTOR action', () => {
        const testState = {
            body: [...testConstructorBodyData],
            head: [...testConstructorBodyData]
        }

        expect(reducer(testState,  {type: CLEAR_CONSTRUCTOR}))
            .toEqual({
                body: [],
                head: [],
            })
    })

    test('should return state with refreshed new body RESET_INGREDIENT_DATA action', () => {
        const testState = {
            ...initialState,
            body: [...testConstructorBodyData]
        }

        const payload = [testConstructorBodyData[1], testConstructorBodyData[0]]

        expect(reducer(testState,  {type: RESET_INGREDIENT_DATA, payload}))
            .toEqual({
                ...initialState,
                body: payload,
            })
    }) 
})