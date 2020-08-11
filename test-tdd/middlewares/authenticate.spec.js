const authenticate = require('./authenticate');

describe('Middlewares', () => {
    describe('authenticate', () => {
        it('should validate that user id equals 1', () => {
            const req = {
                header: jest.fn().mockReturnValue("1")
            }

            const res = {
                sendStatus: jest.fn()
            }

            const next = jest.fn()

            authenticate(req, res, next)
            expect(req.header.mock.calls).toEqual([
                ['user_id']
            ])
            expect(res.sendStatus.mock.calls).toEqual([])
            expect(next.mock.calls).toEqual([[]]);
        });

        it('should if user does not have id equal to 1', () => {
            const req = {
                header: jest.fn().mockReturnValue("2")
            }
            
            const res = {
                sendStatus: jest.fn()
            }

            const next = jest.fn()

            authenticate(req, res, next)
            expect(req.header.mock.calls).toEqual([
                ['user_id']
            ])
            expect(res.sendStatus.mock.calls).toEqual([
                [403]
            ])
            expect(next.mock.calls).toEqual([]);
        });
    });
});
