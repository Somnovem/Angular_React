import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";

export const usersListStore = combineReducers({
    users: reducer
})

export const store = createStore(usersListStore,applyMiddleware(thunk));
