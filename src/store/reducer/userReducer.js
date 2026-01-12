const initialState = {
    users: [], // Keep all users if needed
    friends: [], // Specifically for the friends list
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_FRIENDS_REQUEST":
        case "ADD_FRIEND_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_FRIENDS_SUCCESS":
            return {
                ...state,
                loading: false,
                friends: action.payload,
            };
        case "ADD_FRIEND_SUCCESS":
            return {
                ...state,
                loading: false,
                friends: [...state.friends, action.payload],
            };
        case "FETCH_FRIENDS_FAILURE":
        case "ADD_FRIEND_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
