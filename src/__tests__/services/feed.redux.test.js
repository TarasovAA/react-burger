import { feedReducer as reducer, initialState } from "../../services/feed/reducer";

describe('Feed redux reducers', () => {
    test('should return default state', () => {
        expect(reducer(undefined, {type: 'INCORRECT_TYPE'})).toEqual(
            initialState
        );
    })
})