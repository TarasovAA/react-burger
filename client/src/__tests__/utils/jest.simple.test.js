import { checkReponse } from "../../utils/httpHelpers";

describe('check checkReponse func', () => {
    test('should return success', () => {
        const testObj = {
            ok: true,
            json: () => {
                return { result: 'success'};
            }
        }

        const result = checkReponse(testObj);

        expect(result).toEqual({ result: 'success'});
    })

    test('should return reject', () => {
        const testObj = {
            ok: false,
            json: async () => {
                return 'Some error has happened';
            }
        }

        const result = checkReponse(testObj);

        expect(result).rejects.toEqual('Some error has happened');
    })
})