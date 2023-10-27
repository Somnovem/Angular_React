import {combineReducers} from "redux";
import {reducer} from "./reducer";
import {configureStore} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    people: reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});