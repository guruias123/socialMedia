import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk'; // Adjusted import for v3
import * as actions from './userAction';
import apiClient from '../../api/axiosClient';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Mock the API client
jest.mock('../../api/axiosClient');

describe('user actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
        jest.clearAllMocks();
    });

    it('creates FETCH_FRIENDS_SUCCESS when fetching friends has been done', async () => {
        const mockFriends = [{ id: 1, name: 'John Doe' }];
        apiClient.get.mockResolvedValue(mockFriends);

        const expectedActions = [
            { type: 'FETCH_FRIENDS_REQUEST' },
            { type: 'FETCH_FRIENDS_SUCCESS', payload: mockFriends },
        ];

        await store.dispatch(actions.fetchFriends());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates ADD_FRIEND_SUCCESS when adding friend has been done', async () => {
        const newFriend = { name: 'Jane Doe' };
        const responseData = { id: 2, ...newFriend };
        apiClient.post.mockResolvedValue(responseData);

        const expectedActions = [
            { type: 'ADD_FRIEND_REQUEST' },
            { type: 'ADD_FRIEND_SUCCESS', payload: responseData },
        ];

        await store.dispatch(actions.addFriend(newFriend));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
