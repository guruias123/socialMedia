import apiClient from "../../api/axiosClient";

export const fetchFriends = () => {
    return async (dispatch) => {
        dispatch({ type: "FETCH_FRIENDS_REQUEST" });
        try {
            const data = await apiClient.get("/users");
            dispatch({ type: "FETCH_FRIENDS_SUCCESS", payload: data });
        } catch (error) {
            dispatch({ type: "FETCH_FRIENDS_FAILURE", payload: error.message });
        }
    };
};

export const addFriend = (userData) => {
    return async (dispatch) => {
        dispatch({ type: "ADD_FRIEND_REQUEST" });
        try {
            const data = await apiClient.post("/users", userData);
            dispatch({ type: "ADD_FRIEND_SUCCESS", payload: data });
        } catch (error) {
            dispatch({ type: "ADD_FRIEND_FAILURE", payload: error.message });
        }
    };
};

export const updateUser = (id, userData) => {
    return async (dispatch) => {
        dispatch({ type: "UPDATE_USER_REQUEST" });
        try {
            const data = await apiClient.patch(`/users/${id}`, userData);
            dispatch({ type: "UPDATE_USER_SUCCESS", payload: data });
        } catch (error) {
            dispatch({ type: "UPDATE_USER_FAILURE", payload: error.message });
        }
    };
};
