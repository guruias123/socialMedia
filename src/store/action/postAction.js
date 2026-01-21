import apiClient from "../../api/axiosClient";

export const fetchPosts = () => {
    return async (dispatch) => {
        dispatch({ type: "FETCH_POSTS_REQUEST" });
        try {
            // apiClient interceptor returns response.data directly
            const data = await apiClient.get("/posts");
            dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
        } catch (error) {
            dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
        }
    };
};

export const fetchComments = () => {
    return async (dispatch) => {
        try {
            const data = await apiClient.get("/comments");
            dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: data });
        } catch (error) {
            console.error("Error fetching comments", error);
        }
    };
};

export const addPost = (postData) => {
    return async (dispatch) => {
        dispatch({ type: "ADD_POST_REQUEST" });
        try {
            const data = await apiClient.post("/posts", postData);
            dispatch({ type: "ADD_POST_SUCCESS", payload: data });
        } catch (error) {
            dispatch({ type: "ADD_POST_FAILURE", payload: error.message });
        }
    };
};

export const addComment = (commentData) => {
    return async (dispatch) => {
        dispatch({ type: "ADD_COMMENT_REQUEST" });
        try {
            const data = await apiClient.post("/comments", commentData);
            dispatch({ type: "ADD_COMMENT_SUCCESS", payload: data });
        } catch (error) {
            dispatch({ type: "ADD_COMMENT_FAILURE", payload: error.message });
        }
    };
};
