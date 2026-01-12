import axios from "axios";

const API_URL = "http://localhost:8000";

export const fetchFriends = () => {
    return async (dispatch) => {
        dispatch({ type: "FETCH_FRIENDS_REQUEST" });
        try {
            const response = await axios.get(`${API_URL}/users`);
            dispatch({ type: "FETCH_FRIENDS_SUCCESS", payload: response.data });
        } catch (error) {
            dispatch({ type: "FETCH_FRIENDS_FAILURE", payload: error.message });
        }
    };
};

export const addFriend = (userData) => {
    return async (dispatch) => {
        dispatch({ type: "ADD_FRIEND_REQUEST" });
        try {
            const response = await axios.post(`${API_URL}/users`, userData);
            dispatch({ type: "ADD_FRIEND_SUCCESS", payload: response.data });
        } catch (error) {
            dispatch({ type: "ADD_FRIEND_FAILURE", payload: error.message });
        }
    };
};
