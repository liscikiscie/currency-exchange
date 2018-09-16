export const readSettings = jest.fn()
    .mockReturnValue(Promise.resolve())
    .mockReturnValueOnce(Promise.resolve({ status: 'ok' }));


export const updateSettings = jest.fn()

