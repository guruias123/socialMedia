const initialState = {
    posts: [],
    comments: [],
    loading: false,
    error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS_REQUEST":
        case "ADD_POST_REQUEST":
        case "ADD_COMMENT_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_POSTS_SUCCESS":
            return {
                ...state,
                loading: false,
                posts: action.payload,
            };
        case "FETCH_COMMENTS_SUCCESS":
            return {
                ...state,
                loading: false,
                comments: action.payload,
            };
        case "ADD_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.payload],
            };
        case "ADD_COMMENT_SUCCESS":
            return {
                ...state,
                loading: false,
                comments: [...state.comments, action.payload],
            };
        case "FETCH_POSTS_FAILURE":
        case "ADD_POST_FAILURE":
        case "ADD_COMMENT_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;
