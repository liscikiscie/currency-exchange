import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { updateSettings } from './actions';
import reducer from './reducers'

describe('mutations', () => {
    const mockStore = configureStore([ thunkMiddleware ]);
    let store;

    beforeEach(() => {
        store = mockStore({});
        store.replaceReducer(reducer);
    });

    afterEach(() => {
        store = null;
    });

    test('updateSettings', async () => {

    });

});
