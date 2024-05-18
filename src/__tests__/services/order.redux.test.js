import reducer, { initialState } from "../../services/order/reducer";
import { 
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_REQUEST_SUCCESS,
    CREATE_ORDER_REQUEST_FAILED 
} from "../../services/order/constants";

describe('Order redux reducers', () => {
    test('should return default state', () => {
        expect(reducer(undefined, {type: 'INCORRECT_TYPE'})).toEqual(
            initialState
        );
    })

    test('should return state after CREATE_ORDER_REQUEST action', () => {
        expect(reducer(undefined, {type: CREATE_ORDER_REQUEST})).toEqual({
            ...initialState,
            isCreating: true,
            isCreatingError: false,
            creatingErrorMessage: ''
        });
    })

    test('should return state after CREATE_ORDER_REQUEST_SUCCESS action', () => {
        const pandingState = {
            ...initialState,
            isCreating: true,
            isCreatingError: false,
            creatingErrorMessage: ''
        }

        const testObj = {
            order: {
                createdAt: Date.now(),
                ingredients: [{
                    type: 'bun',
                    _id: "",
                    name: "",
                    proteins: 0,
                    fat: 0,
                    carbohydrates: 0,
                    calories: 0,
                    price: 0,
                    image: "",
                    image_mobile: "",
                    image_large: "",
                }],
                name: 'Test burger',
                owner: {
                    name: "user 1",
                    email: "user1@mail.ru",
                },
                number: 0,
                status: 'done',
                price: 200,

            },
            name: 'Test burger'
        }

        expect(reducer(pandingState, {type: CREATE_ORDER_REQUEST_SUCCESS, payload: testObj})).toEqual({
            ...initialState,
            orderNamber: 0,
            name: 'Test burger',
            isCreating: false,
            isCreated: true,
        });
    })

    test('should return state after CREATE_ORDER_REQUEST_FAILED action', () => {
        const pendingState = {
            ...initialState,
            isCreating: true,
            isCreatingError: false,
            creatingErrorMessage: ''
        }

        expect(reducer(pendingState, {type: CREATE_ORDER_REQUEST_FAILED, errorMessage: 'Some error happened'}))
        .toEqual({
            ...pendingState,
            isCreating: false,
            isCreatingError: true,
            creatingErrorMessage: 'Some error happened'
        });
    })
})