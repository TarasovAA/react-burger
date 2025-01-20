import { handleRequest } from "../../utils/httpHelpers";
import { TResponseBody } from "../../utils/types"

describe('check handleRequest function with mocking', () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(
                {result: 'ok'}
            ),
            ok: true,
        });
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    test('shuold be successful', async () => {
        const result = await handleRequest('', {email: '', password: '' })

        expect(result).toEqual({result: 'ok'});
        expect(fetch).toHaveBeenCalledTimes(1);
    })
})