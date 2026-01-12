import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import postReducer from "./reducer/postReducer";
import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;