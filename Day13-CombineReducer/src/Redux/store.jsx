import { combineReducers, createStore } from "redux";
import { authReducer } from "./authState/reducer";
import { todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    todo:todoReducer
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())