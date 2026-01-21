import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import AddFriendsList from './addFriendsList';

const mockStore = configureStore([thunk]);

describe('AddFriendsList Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            user: {
                friends: [
                    { id: 1, name: 'Test Friend', role: 'Developer', logo: 'test.jpg' }
                ],
                loading: false
            }
        });

        // Mock dispatch
        store.dispatch = jest.fn();
    });

    test('renders friends list correctly', () => {
        render(
            <Provider store={store}>
                <AddFriendsList />
            </Provider>
        );

        expect(screen.getByText('Friends')).toBeInTheDocument();
        expect(screen.getByText('Test Friend')).toBeInTheDocument();
    });

    test('opens add user modal when button is clicked', () => {
        render(
            <Provider store={store}>
                <AddFriendsList />
            </Provider>
        );

        const addButton = screen.getByText(/Add Users/i);
        fireEvent.click(addButton);

        // Modal title should appear
        expect(screen.getByText('Add User', { selector: '.modal-title' })).toBeInTheDocument();
    });
});
