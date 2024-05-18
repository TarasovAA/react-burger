import reducer, { initialState } from "../../services/order/reducer";

describe('Order redux reducers', () => {
    test('should return default state', () => {
        expect(reducer(undefined, {type: 'INCORRECT_TYPE'})).toEqual(
            initialState
        );
    })
})