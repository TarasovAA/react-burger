import reducer, { initialState } from "../../services/constructor/reducer";

describe('Constructor redux reducers', () => {
    test('should return default state', () => {
        expect(reducer(undefined, {type: 'INCORRECT_TYPE'})).toEqual(
            initialState
        );
    })
})