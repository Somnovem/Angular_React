import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";

export const weatherStore = combineReducers({
    weatherData: reducer
})

export const store = createStore(weatherStore,applyMiddleware(thunk));
