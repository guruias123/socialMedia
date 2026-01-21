import postReducer from './postReducer';

describe('postReducer', () => {
    const initialState = {
        posts: [],
        comments: [],
        loading: false,
        error: null,
    };

    it('should return the initial state', () => {
        expect(postReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_POSTS_SUCCESS', () => {
        const mockPosts = [{ id: 1, title: 'Test Post' }];
        const action = {
            type: 'FETCH_POSTS_SUCCESS',
            payload: mockPosts,
        };
        const expectedState = {
            ...initialState,
            loading: false,
            posts: mockPosts,
        };
        expect(postReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle ADD_POST_SUCCESS', () => {
        const initialWithPosts = {
            ...initialState,
            posts: [{ id: 1, title: 'Existing Post' }],
        };
        const newPost = { id: 2, title: 'New Post' };
        const action = {
            type: 'ADD_POST_SUCCESS',
            payload: newPost,
        };
        const expectedState = {
            ...initialWithPosts,
            loading: false,
            posts: [{ id: 1, title: 'Existing Post' }, newPost],
        };
        expect(postReducer(initialWithPosts, action)).toEqual(expectedState);
    });
});
